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

  // Mark inputs that are used
  connections.forEach(connection => {
    extendedComponents[connection.input.c].inputs[
      connection.input.i
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
      components: undefined,
      connections: undefined,
      connectionSource: undefined,
      addedGateIndex: undefined,
      addedGateOffsetX: undefined
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

      const componentInputs = this.components
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
      this.components = extendComponents(
        this.board.components,
        this.board.connections
      )
      this.connections = this.board.connections

      this.board.connections.forEach(connection => {
        // Connect models
        this.components[connection.input.c].model.connect(
          connection.input.i,
          this.components[connection.output.c].model,
          connection.output.o
        )
      })
    },
    addGate(type, x, y) {
      const index = this.components.length
      const component = extendComponent({ type, x, y }, index)
      this.components.push(component)
      this.addedGateIndex = index
      this.addedGateOffsetX = 0
    },
    dragAddedGate({ dx, dy }) {
      const component = this.components[this.addedGateIndex]
      component.x += dx
      component.y += dy
      this.addedGateOffsetX += dx
    },
    gateAdded() {
      const component = this.components[this.addedGateIndex]
      const dx = this.addedGateOffsetX

      this.addedGateIndex = undefined
      this.addedGateOffsetX = undefined

      if (dx / this.zoom < 50) {
        this.components.splice(component.index, 1)
        return
      }

      if (['static', 'result'].includes(component.type)) {
        const label = prompt('Label (optional):')
        component.label = label
      }
    },
    drag(index, { dx, dy }) {
      const component = this.components[index]
      component.x += dx
      component.y += dy
    },
    startConnection(index, ioKey, outbound) {
      const component = this.components[index]
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

        const inputComponent = this.components[input.index]
        const outputComponent = this.components[output.index]

        // Connect models
        inputComponent.model.connect(
          input.ioKey,
          outputComponent.model,
          output.ioKey
        )

        // Mark connection as used
        inputComponent.inputs[input.ioKey].used = true

        // Add connection's visual representation
        this.connections.push({
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

      this.connectionSource = undefined
    },
    removeInput(index, inputKey) {
      const connectionIndex = this.connections.findIndex(
        connection =>
          connection.input.c == index && connection.input.i == inputKey
      )
      const connection = this.connections[connectionIndex]
      const inputComponent = this.components[connection.input.c]
      const outputComponent = this.components[connection.output.c]

      // Disconnect models
      inputComponent.model.disconnect(connection.input.i, outputComponent.model)

      // Remove connection representation
      this.connections.splice(connectionIndex, 1)

      // Mark input as not used
      inputComponent.inputs[connection.input.i].used = false
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
    v-for="(component, index) in components" :key="index"
    :x="component.x" :y="component.y" :r="10"
    :zoom="zoom"
    :disabled="!!connectionSource"
    @drag="drag(index, $event)"
  )
    g
      component(
        :is="component.type"
        :index="index"
        :label="component.label"
        :model="component.model"
        :inputs="Object.fromEntries(Object.entries(component.model.inputs).map(([inputKey, { c, o }]) => [inputKey, c.outputs[o]]))"
        :outputs="component.model.outputs"
      )
      Draggable(
        v-for="(output, outputKey) in component.outputs" :key="`draggable-${outputKey}`"
        v-if="!connectionSource || !connectionSource.outbound || (connectionSource.index == index && connectionSource.ioKey == outputKey)"
        :x="output.x" :y="output.y" :r="5"
        :zoom="zoom"
        :color="connectionTarget && connectionTarget.index == index && connectionTarget.ioKey == outputKey ? 'green' : 'gray'"
        @dragstart="startConnection(index, outputKey, true)"
        @drag="drawConnection($event)"
        @dragend="endConnection()"
      )
      template(v-for="(input, inputKey) in component.inputs")
        Draggable(
          :key="inputKey"
          v-if="!input.used && (!connectionSource || connectionSource.outbound || (connectionSource.index == index && connectionSource.ioKey == inputKey))"
          :x="input.x" :y="input.y" :r="5"
          :zoom="zoom"
          :color="connectionTarget && connectionTarget.index == index && connectionTarget.ioKey == inputKey ? 'green' : 'gray'"
          @dragstart="startConnection(index, inputKey, false)"
          @drag="drawConnection($event)"
          @dragend="endConnection()"
        )
        circle.remove-input(
          v-else
          :cx="input.x" :cy="input.y" :r="5"
          @click="removeInput(index, inputKey)"
        )
  Connection(
    v-for="connection in connections" :key="`${connection.output.c}-${connection.output.o}-${connection.input.c}-${connection.input.i}`"
    :x1="components[connection.output.c].x + components[connection.output.c].outputs[connection.output.o].x"
    :y1="components[connection.output.c].y + components[connection.output.c].outputs[connection.output.o].y"
    :x2="components[connection.input.c].x + components[connection.input.c].inputs[connection.input.i].x"
    :y2="components[connection.input.c].y + components[connection.input.c].inputs[connection.input.i].y"
    :on="components[connection.output.c].model.outputs[connection.output.o]"
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

<style lang="scss" scoped>
.remove-input {
  fill: #404e7c;
  stroke: none;
  opacity: 0.1;
  cursor: pointer;
}

.remove-input:hover {
  opacity: 0.3;
  fill: red;
}
</style>
