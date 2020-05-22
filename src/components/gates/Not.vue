<script>
import { Not as model } from '../../model'

export default {
  extraData: {
    model,
    outputs: {
      q: { x: 25, y: 0 }
    },
    inputs: {
      a: { x: -25, y: 0 }
    }
  }
}
</script>

<template functional lang="pug">
g(transform="translate(-25)")
  path(d=`M 0 0 L 10 0` :class="{ on: props.inputs && props.inputs.a }")
  path(d=`
    M 10 -10
    L 10 10
    L 30 0
    L 10 -10`)
  path(d=`M 40 0 L 50 0` :class="{ on: props.outputs && props.outputs.q }")

  circle(r="5" cx="35" cy="0")
  text(v-if="props.index != undefined" x="25" y="25" font-size="8") {{ props.index }}
</template>
