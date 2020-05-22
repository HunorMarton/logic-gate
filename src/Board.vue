<script>
import Sidebar from './components/Sidebar.vue'

import Static from './components/gates/Static.vue'
import Result from './components/gates/Result.vue'
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
    case 'result':
      return Result.extraData
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

const extendComponent = (component, index) => {
  const additionalData = resolveAdditionalData(component.type)

  const inputs =
    additionalData.inputs && JSON.parse(JSON.stringify(additionalData.inputs))
  const outputs =
    additionalData.outputs && JSON.parse(JSON.stringify(additionalData.outputs))

  return {
    ...component,
    index,
    inputs,
    outputs,
    model: new additionalData.model(component.props)
  }
}

const extendComponents = (components, connections) => {
  const extendedComponents = components.map(extendComponent)

  // Mark inputs/outputs that are used
  connections.forEach(connection => {
    extendedComponents[connection.input.c].inputs[
      connection.input.i
    ].used = true
    extendedComponents[connection.output.c].outputs[
      connection.output.o
    ].used = true
  })

  return extendedComponents
}

export default {
  name: 'App',
  components: {
    Sidebar,

    Static,
    Result,

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
    board: {
      type: Object,
      required: true
    },
    zoom: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      components2: undefined,
      connections2: undefined,
      connectionSource: undefined,
      addedGateIndex: undefined,
      addedGateOffsetX: undefined,
      addedGateOffsetY: undefined
    }
  },
  created() {
    this.initBoard()
  },
  watch: {
    board() {
      this.initBoard()
    }
  },
  computed: {
    connectionTarget() {
      if (!this.connectionSource) return undefined
      const targetX = this.connectionSource.x + this.connectionSource.dx
      const targetY = this.connectionSource.y + this.connectionSource.dy

      const targetIsAnInput = this.connectionSource.outbound

      const distance = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
        Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

      const componentInputs = this.components2
        // Filter out the ones that have no input/output
        .filter(component =>
          targetIsAnInput ? component.inputs : component.outputs
        )
        // Flatmap component - input/output pairs
        .flatMap(component =>
          Object.entries(
            targetIsAnInput ? component.inputs : component.outputs
          ).map(([ioKey, io]) => ({
            component,
            ioKey,
            io
          }))
        )
        // Filter out inputs that are already taken
        .filter(
          // eslint-disable-next-line no-unused-vars
          ({ component, ioKey, io }) => (targetIsAnInput ? !io.used : true)
        )
        // Filter out inputs that are not close enough
        .filter(
          // eslint-disable-next-line no-unused-vars
          ({ component, ioKey, io }) =>
            distance(
              { x: targetX, y: targetY },
              { x: component.x + io.x, y: component.y + io.y }
            ) < 10
        )
        // Map to component model - input key pairs
        .map(({ component, ioKey }) => ({
          index: component.index,
          ioKey
        }))[0]

      console.log(componentInputs)

      return componentInputs
    }
  },
  methods: {
    initBoard() {
      this.components2 = extendComponents(
        this.board.components,
        this.board.connections
      )
      this.connections2 = this.board.connections

      this.board.connections.forEach(connection => {
        // Connect models
        this.components2[connection.input.c].model.connect(
          connection.input.i,
          this.components2[connection.output.c].model,
          connection.output.o
        )
      })
    },
    addGate(type, x, y) {
      const index = this.components2.length
      const component = extendComponent({ type, x, y }, index)
      this.components2.push(component)
      this.addedGateIndex = index
      this.addedGateOffsetX = 0
      this.addedGateOffsetY = 0
    },
    dragAddedGate({ dx, dy }) {
      const component = this.components2[this.addedGateIndex]
      component.x += dx
      component.y += dy
      this.addedGateOffsetX += dx
      this.addedGateOffsetY += dy
    },
    gateAdded() {
      const dx = this.addedGateOffsetX
      const dy = this.addedGateOffsetY

      if (Math.sqrt(Math.pow(dx, 2) * Math.pow(dy, 2)) < 10) {
        // TODO: Remove item
      }

      this.addedGateIndex = undefined
      this.addedGateOffsetX = undefined
      this.addedGateOffsetY = undefined
    },
    drag(index, { dx, dy }) {
      const component = this.components2[index]
      component.x += dx
      component.y += dy
    },
    startConnection(index, ioKey, outbound) {
      const component = this.components2[index]
      const offset = outbound
        ? component.outputs[ioKey]
        : component.inputs[ioKey]

      this.connectionSource = {
        index,
        ioKey,
        outbound,
        x: component.x + offset.x,
        y: component.y + offset.y,
        dx: 0,
        dy: 0
      }
    },
    drawConnection({ dx, dy }) {
      this.connectionSource.dx += dx
      this.connectionSource.dy += dy

      if (this.connectionTarget)
        console.log(
          'target found:',
          this.connectionTarget.index,
          this.connectionTarget.ioKey
        )
    },
    endConnection() {
      if (this.connectionTarget) {
        console.log(
          'target found:',
          this.connectionSource.index,
          this.connectionSource.ioKey,
          '->',
          this.connectionTarget.index,
          this.connectionTarget.ioKey
        )

        const output = this.connectionSource.outbound
          ? this.connectionSource
          : this.connectionTarget
        const input = this.connectionSource.outbound
          ? this.connectionTarget
          : this.connectionSource

        const inputComponent = this.components2[input.index]
        const outputComponent = this.components2[output.index]

        inputComponent.model.connect(
          input.ioKey,
          outputComponent.model,
          output.ioKey
        )

        inputComponent.inputs[input.ioKey].used = true
        outputComponent.outputs[output.ioKey].used = true

        this.connections2.push({
          output: {
            c: output.index,
            o: output.ioKey
          },
          input: {
            c: input.index,
            i: input.ioKey
          }
        })
      } else console.log('no target found')

      // TODO: Delete component
      // TODO: Delete connection (Highlight connection on delete circle hover)
      // TODO: Make svg fill the screen
      // TODO: Make sidebar nicer
      // TODO: Add header with board selector, footer with about
      // TODO: Add labels to inputs and outputs
      // TODO: Add label popup when gateAdded
      // TODO: Hide id behind a debug flag (or just make it gray)

      this.connectionSource = undefined
    }
  }
}
</script>

<template lang="pug">
g
  Sidebar(
    :zoom="zoom"
    @addGate="addGate"
    @dragAddedGate="dragAddedGate"
    @gateAdded="gateAdded"
  )
  Draggable(
    v-for="(component, index) in components2" :key="index"
    :x="component.x" :y="component.y" :r="10"
    :zoom="zoom"
    :disabled="!!connectionSource"
    @drag="drag(index, $event)"
  )
    g
      component(
        :is="component.type"
        :index="index"
        :model="component.model"
        :inputs="Object.fromEntries(Object.entries(component.model.inputs).map(([inputKey, { c, o }]) => [inputKey, c.outputs[o]]))"
        :outputs="component.model.outputs"
      )
      template(v-for="(output, outputKey) in component.outputs")
        text(
          v-if="false"
          :key="`text-${outputKey}`"
          :x="output.x" :y="output.y - 5" text-anchor="end"
        ) {{ component.model.outputs[outputKey] == undefined ? 'x' : Number(component.model.outputs[outputKey]) }}
        Draggable(
          :key="`draggable-${outputKey}`"
          v-if="!connectionSource || !connectionSource.outbound || (connectionSource.index == index && connectionSource.ioKey == outputKey)"
          :x="output.x" :y="output.y" :r="5"
          :zoom="zoom"
          :color="connectionTarget && connectionTarget.index == index && connectionTarget.ioKey == outputKey ? 'green' : 'gray'"
          @dragstart="startConnection(index, outputKey, true)"
          @drag="drawConnection($event)"
          @dragend="endConnection()"
        )
      Draggable(
        v-for="(input, inputKey) in component.inputs" :key="inputKey"
        v-if="!input.used && (!connectionSource || connectionSource.outbound || (connectionSource.index == index && connectionSource.ioKey == inputKey))"
        :x="input.x" :y="input.y" :r="5"
        :zoom="zoom"
        :color="connectionTarget && connectionTarget.index == index && connectionTarget.ioKey == inputKey ? 'green' : 'gray'"
        @dragstart="startConnection(index, inputKey, false)"
        @drag="drawConnection($event)"
        @dragend="endConnection()"
      )
  Connection(
    v-for="connection in connections2" :key="`${connection.output.c}-${connection.input.c}`"
    :x1="components2[connection.output.c].x + components2[connection.output.c].outputs[connection.output.o].x"
    :y1="components2[connection.output.c].y + components2[connection.output.c].outputs[connection.output.o].y"
    :x2="components2[connection.input.c].x + components2[connection.input.c].inputs[connection.input.i].x"
    :y2="components2[connection.input.c].y + components2[connection.input.c].inputs[connection.input.i].y"
    :on="components2[connection.output.c].model.outputs[connection.output.o]"
  )
  Connection(
    v-if="connectionSource"
    :x1="connectionSource.x"
    :y1="connectionSource.y"
    :x2="connectionSource.x + connectionSource.dx"
    :y2="connectionSource.y + connectionSource.dy"
  )
</template>

<style lang="scss">
.on {
  stroke: #71b48d;
  stroke-width: 1.5px;
}
</style>
