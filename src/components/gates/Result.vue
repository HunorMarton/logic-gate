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
  path(d=`M 0 0 L 40 0` :class="{ on: props.inputs && props.inputs.a }")
  rect(
    x="40" y="-7" width="14" height="14"
    :class="{ fillOn: props.inputs && props.inputs.a }"
  )
  text(x="62" y="0" font-size="10" alignment-baseline="middle" text-anchor="start") {{ props.label }}
</template>

<style lang="scss" scoped>
.fillOn {
  stroke: #71b48d;
  fill: #86cb92;
}
</style>
