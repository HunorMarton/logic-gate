<script>
import Static from './gates/Static.vue'
import Result from './gates/Result.vue'

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
    Result,

    Not,
    And,
    Nand,
    Or,
    Nor,
    Xor,

    Draggable
  },
  props: {
    zoom: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    baseOffset: {
      x: 40,
      y: 40
    },
    gates: [
      { type: 'static', offset: 0 },
      { type: 'result', offset: 50 },
      { type: 'not', offset: 100 },
      { type: 'and', offset: 150 },
      { type: 'nand', offset: 200 },
      { type: 'or', offset: 250 },
      { type: 'nor', offset: 300 },
      { type: 'xor', offset: 350 }
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
    rect(x="-40" y="-40" width="80" height="100%")
    Draggable(
      v-for="gate in gates"
      :x="0" :y="gate.offset" :r="20"
      :zoom="zoom"
      @dragstart="dragstart(gate.type, gate.offset)"
      @drag="drag($event)"
      @dragend="dragend"
    )
      component(:is="gate.type")
    g(v-if="false" :transform="`translate(0, ${50*gates.length + 30})`")
      rect(x="-10" y="0" width="20" height="10" rx="2" fill="white")
      rect(x="-20" y="15" width="40" height="40" rx="5" fill="white")
      rect(x="-25" y="10" width="50" height="10" rx="2" fill="white")

</template>

<style lang="scss" scoped>
.sidebar rect {
  fill: #404e7c;
  opacity: 0.05;
}
</style>
