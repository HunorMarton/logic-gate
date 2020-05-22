<script>
import { Static as model } from '../../model'

export default {
  name: 'Static',
  props: {
    index: {
      type: Number,
      default: undefined
    },
    model: {
      type: Object,
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    outputs: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    toggle() {
      this.model.value = !this.model.value
    }
  },
  extraData: {
    model,
    outputs: {
      q: { x: 25, y: 0 }
    }
  }
}
</script>

<template lang="pug">
g(
  transform="translate(-25)"
  @click="toggle"
)
  text(x="-15" y="0" font-size="10" alignment-baseline="middle" text-anchor="end") {{ label }}
  circle(v-if="this.model" cx="3" cy="0" r="10")
  rect(
    x="-4" y="-7" width="14" height="14"
    :class="{ fillOn: outputs && outputs.q }"
  )
  path(d=`M 10 0 L 50 0` :class="{ on: outputs && outputs.q }")
  text(v-if="index != undefined" x="25" y="25" font-size="8" text-anchor="middle") {{ index }}
</template>

<style lang="scss" scoped>
circle {
  fill: #404e7c;
  stroke: none;
  opacity: 0.1;
}

rect {
  cursor: pointer;
}

.fillOn {
  stroke: #71b48d;
  fill: #86cb92;
}
</style>
