<script>
import { Static as model } from '../../model'

export default {
  name: 'Static',
  props: {
    index: {
      type: Number,
      required: true
    },
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle() {
      this.model.value = !this.model.value
    }
  },
  extraData: {
    model,
    o: {
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
  path(d=`
    M 0 -10
    L 0 10
    L 20 10
    L 20 -10
    L 0 -10

    M 20 0 L 50 0`)
  text(x="40" y="-5") {{ model.outputs.q == undefined ? 'x' : Number(model.outputs.q) }}
  text(x="40" y="15" font-size="8") {{ index }}
</template>

<style lang="scss" scoped>
path {
  cursor: pointer;
  fill: #fff;
}
</style>
