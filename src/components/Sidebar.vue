<script>
import Static from './gates/Static.vue'
import Not from './gates/Not.vue'
import And from './gates/And.vue'
import Nand from './gates/Nand.vue'
import Or from './gates/Or.vue'
import Nor from './gates/Nor.vue'
import Xor from './gates/Xor.vue'

import Draggable from './Draggable'

export default {
  components: {
    Static,
    Not,
    And,
    Nand,
    Or,
    Nor,
    Xor,

    Draggable
  },
  data: () => ({
    baseOffset: {
      x: 0,
      y: 0
    },
    gates: [
      { type: 'static', offset: 0 },
      { type: 'not', offset: 50 },
      { type: 'and', offset: 100 },
      { type: 'nand', offset: 150 },
      { type: 'or', offset: 200 },
      { type: 'nor', offset: 250 },
      { type: 'xor', offset: 300 }
    ]
  }),
  methods: {
    dragstart(type, offset) {
      this.$emit('addGate', type, this.baseOffset.x, this.baseOffset.y + offset)
    },
    drag({ dx, dy }) {
      this.$emit('dragAddedGate', { dx, dy })
    },
    dragend() {
      this.$emit('gateAdded')
    }
  }
}
</script>

<template lang="pug">
  g.sidebar(:transform="`translate(${baseOffset.x}, ${baseOffset.y})`")
    rect(x="-40" y="-40" width="80" :height="50*gates.length + 30")
    Draggable(
      v-for="gate in gates"
      :x="0" :y="gate.offset" :r="20"
      @dragstart="dragstart(gate.type, gate.offset)"
      @drag="drag($event)"
      @dragend="dragend"
    )
      component(:is="gate.type")
</template>

<style lang="scss" scoped>
.sidebar rect {
  stroke: #ccc;
  stroke-width: 1;
}
</style>
