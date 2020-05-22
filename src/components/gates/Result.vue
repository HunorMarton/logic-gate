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
  text(v-if="props.index != undefined" x="25" y="25" font-size="8" text-anchor="middle") {{ props.index }}
</template>

<style lang="scss" scoped>
.fillOn {
  stroke: #71b48d;
  fill: #86cb92;
}
</style>
