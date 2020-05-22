<script>
import { Result as model } from '../../model'

export default {
  extraData: {
    model,
    inputs: {
      a: { x: -25, y: 0 }
    }
  }
}
</script>

<template functional lang="pug">
g(transform="translate(-25)")
  path(d=`M 0 0 L 30 0` :class="{ on: props.inputs && props.inputs.a }")
  path(
    d=`
      M 30 -10
      L 30 10
      L 50 10
      L 50 -10
      L 30 -10`
    :class="{ fillOn: props.inputs && props.inputs.a }"
  )
  text(v-if="props.index != undefined" x="25" y="25" font-size="8") {{ props.index }}
</template>

<style lang="scss" scoped>
path {
  fill: #fff;
}

.fillOn {
  stroke: #71b48d;
  fill: #86cb92;
}
</style>
