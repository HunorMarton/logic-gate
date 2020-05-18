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
  return components.map(component => {
    const data = resolveAdditionalData(component.type)

    return {
      ...component,
      ...data,
      model: new data.model(component.props)
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
    this.connections.forEach(connection => {
      // Connect models
      this.components2[connection.input.c].model.connect(
        connection.input.i,
        this.components2[connection.output.c].model,
        connection.output.o
      )
    })
  },
  computed: {
    connectionTarget() {
      if (!this.connectionSource) return undefined
      const targetX = this.connectionSource.x + this.connectionSource.dx
      const targetY = this.connectionSource.y + this.connectionSource.dy

      const distance = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
        Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

      const componentInputs = this.components2
        // Add component index
        .map((component, index) => ({ ...component, index }))
        // Filter out the ones that have no input
        .filter(component => component.inputs)
        // Flatmap component - input pairs
        .flatMap(component =>
          Object.entries(component.inputs).map(([inputKey, input]) => ({
            component,
            inputKey,
            input
          }))
        )
        .filter(
          // eslint-disable-next-line no-unused-vars
          ({ component, inputKey, input }) =>
            distance(
              { x: targetX, y: targetY },
              { x: component.x + input.x, y: component.y + input.y }
            ) < 10
        )
        // Map to component model - input key pairs
        // eslint-disable-next-line no-unused-vars
        .map(({ component, inputKey, input }) => ({
          index: component.index,
          model: component.model,
          inputKey
        }))[0]

      console.log(componentInputs)

      return componentInputs
    }
  },
  methods: {
    drag(index, { dx, dy }) {
      const component = this.components2[index]
      component.x += dx
      component.y += dy
    },
    startConnection(index, outputKey) {
      const component = this.components2[index]
      this.connectionSource = {
        index,
        model: component.model,
        outputKey,
        x: component.x + component.outputs[outputKey].x,
        y: component.y + component.outputs[outputKey].y,
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
          this.connectionTarget.index,
          this.connectionTarget.inputKey
        )
    },
    endConnection() {
      if (this.connectionTarget) {
        console.log(
          'target found',
          this.connectionSource.index,
          this.connectionSource.outputKey,
          this.connectionTarget.index,
          this.connectionTarget.inputKey
        )
        this.connectionTarget.model.connect(
          this.connectionTarget.inputKey,
          this.connectionSource.model,
          this.connectionSource.outputKey
        )
        this.connections2.push({
          output: {
            c: this.connectionSource.index,
            o: this.connectionSource.outputKey
          },
          input: {
            c: this.connectionTarget.index,
            i: this.connectionTarget.inputKey
          }
        })
      } else console.log('no target found')

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
    v-for="(component, index) in components2" :key="index"
    :x="component.x" :y="component.y" :r="15"
    :disabled="mode == 'select'"
    @drag="drag(index, $event)"
  )
    g
      component(
        :is="component.type"
        :index="index"
        :model="component.model"
      )
      Draggable(
        v-for="(output, outputKey) in component.outputs" :key="outputKey"
        :x="output.x" :y="output.y" :r="5"
        @dragstart="startConnection(index, outputKey)"
        @drag="drawConnection($event)"
        @dragend="endConnection()"
      )
  Connection(
    v-for="connection in connections2" :key="`${connection.output}-${connection.input}`"
    :x1="components2[connection.output.c].x + components2[connection.output.c].outputs[connection.output.o].x"
    :y1="components2[connection.output.c].y + components2[connection.output.c].outputs[connection.output.o].y"
    :x2="components2[connection.input.c].x + components2[connection.input.c].inputs[connection.input.i].x"
    :y2="components2[connection.input.c].y + components2[connection.input.c].inputs[connection.input.i].y"
  )
  Connection(
    v-if="connectionSource"
    :x1="connectionSource.x"
    :y1="connectionSource.y"
    :x2="connectionSource.x + connectionSource.dx"
    :y2="connectionSource.y + connectionSource.dy"
  )
</template>
