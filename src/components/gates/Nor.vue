<script>
import { Nor as model } from '../../model'

export default {
  extraData: {
    model,
    outputs: {
      q: { x: 25, y: 0 }
    },
    inputs: {
      a: { x: -25, y: -5 },
      b: { x: -25, y: 5 }
    }
  }
}
</script>

<template functional lang="pug">
g(transform="translate(-25)")
  path(d=`M 0 -5 L 10 -5` :class="{ on: props.inputs && props.inputs.a }")
  path(d=`M 0 5 L 10 5` :class="{ on: props.inputs && props.inputs.b }")
  path(d=`
    M 7 -10
    C 12 -10 12 10 7 10
    C 40 10 40 -10 7 -10`)
  path(d=`M 39 0 L 50 0` :class="{ on: props.outputs && props.outputs.q }")

  circle(r="3" cx="36" cy="0")
  text(v-if="props.index != undefined" x="25" y="25" font-size="8") {{ props.index }}
</template>
