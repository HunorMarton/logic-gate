<script>
import Static from './components/gates/Static.vue'
import Not from './components/gates/Not.vue'
import And from './components/gates/And.vue'
import Nand from './components/gates/Nand.vue'
import Or from './components/gates/Or.vue'
import Nor from './components/gates/Nor.vue'
import Xor from './components/gates/Xor.vue'
import Connection from './components/Connection.vue'

import Draggable from './components/Draggable'

const resolveAdditionalData = type => {
  switch (type) {
    case 'static':
      return Static.extraData
    case 'not':
      return Not.extraData
    case 'and':
      return And.extraData
    case 'nand':
      return Nand.extraData
    case 'or':
      return Or.extraData
    case 'nor':
      return Nor.extraData
    case 'xor':
      return Xor.extraData
  }
}

const extendComponents = components => {
  return components.map(c => {
    const data = resolveAdditionalData(c.type)

    return {
      ...c,
      ...data,
      model: new data.model(c.props)
    }
  })
}

export default {
  name: 'App',
  components: {
    Static,
    Not,
    And,
    Nand,
    Or,
    Nor,
    Xor,

    Connection,

    Draggable
  },
  props: {
    components: {
      type: Array,
      required: true
    },
    connections: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      components2: extendComponents(this.components),
      connections2: this.connections,
      connectionSource: undefined
    }
  },
  created() {
    this.connections.forEach(c => {
      // Connect models
      this.components2[c.input.c].model.connect(
        c.input.i,
        this.components2[c.output.c].model,
        c.output.o
      )
    })
  },
  computed: {
    connectionTarget() {
      if (!this.connectionSource) return undefined
      const tx = this.connectionSource.x + this.connectionSource.dx
      const ty = this.connectionSource.y + this.connectionSource.dy

      const distance = (x1, y1, x2, y2) =>
        Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

      const componentInputs = this.components2
        // Filter out the ones that have no input
        .filter(c => c.i)
        // Flatmap component - input pairs
        .flatMap(c => Object.entries(c.i).map(i => ({ c, i })))
        // Filter out the ones who's input is close enough
        .filter(
          ({ c, i: [, i] }) => distance(tx, ty, c.x + i.x, c.y + i.y) < 10
        )
        // Map to component model - input key pairs
        .map(({ c, i: [key] }) => ({ model: c.model, i: key }))[0]

      console.log(componentInputs)

      return componentInputs
    }
  },
  methods: {
    drag(id, { dx, dy }) {
      const component = this.components2.find(c => c.model.id == id)
      component.x += dx
      component.y += dy
    },
    startConnection(model, oKey, o) {
      const component = this.components2.find(c => c.model.id == model.id)
      this.connectionSource = {
        source: model.id,
        model,
        o: oKey,
        x: component.x + o.x,
        y: component.y + o.y,
        dx: 0,
        dy: 0
      }
    },
    drawConnection({ dx, dy }) {
      this.connectionSource.dx += dx
      this.connectionSource.dy += dy

      if (this.connectionTarget)
        console.log(
          'target found',
          this.connectionTarget.model.id,
          this.connectionTarget.i
        )
    },
    endConnection() {
      if (this.connectionTarget) {
        console.log(
          'target found',
          this.connectionSource.model.id,
          this.connectionSource.o,
          this.connectionTarget.model.id,
          this.connectionTarget.i
        )
        this.connectionTarget.model.connect(
          this.connectionTarget.i,
          this.connectionSource.model,
          this.connectionSource.o
        )
        this.connections2.push({
          output: {
            c: this.connectionSource.model.id, // This should be index
            o: this.connectionSource.o
          },
          input: {
            c: this.connectionTarget.model.id, // This should be index
            i: this.connectionTarget.i
          }
        })
      } else console.log('no target found')

      // TODO: Move back from component id to index
      // TODO: Fix adding new connection
      // TODO: Disable drag circles when drawing connections
      // TODO: Highlight a connection when close enough
      // TODO: Filter out if connection already connected

      this.connectionSource = undefined
    }
  }
}
</script>

<template lang="pug">
g
  Draggable(
    v-for="c in components2" :key="c.model.id"
    :x="c.x" :y="c.y" :r="15"
    :disabled="mode == 'select'"
    @drag="drag(c.model.id, $event)"
  )
    g
      component(
        :is="c.type"
        :model="c.model"
      )
      Draggable(
        v-for="(o,key) in c.o" :key="key"
        :x="o.x" :y="o.y" :r="5"
        @dragstart="startConnection(c.model, key, o)"
        @drag="drawConnection($event)"
        @dragend="endConnection()"
      )
  Connection(
    v-for="c in connections2" :key="`${c.output}-${c.input}`"
    :x1="components2[c.output.c].x + components2[c.output.c].o[c.output.o].x"
    :y1="components2[c.output.c].y + components2[c.output.c].o[c.output.o].y"
    :x2="components2[c.input.c].x + components2[c.input.c].i[c.input.i].x"
    :y2="components2[c.input.c].y + components2[c.input.c].i[c.input.i].y"
  )
  Connection(
    v-if="connectionSource"
    :x1="connectionSource.x"
    :y1="connectionSource.y"
    :x2="connectionSource.x + connectionSource.dx"
    :y2="connectionSource.y + connectionSource.dy"
  )
</template>
