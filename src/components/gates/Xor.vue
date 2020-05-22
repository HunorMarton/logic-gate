<script>
import { Xor as model } from '../../model'

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
  path(d=`M 0 -5 L 8 -5` :class="{ on: props.inputs && props.inputs.a }")
  path(d=`M 0 5 L 8 5` :class="{ on: props.inputs && props.inputs.b }")
  path(d=`
    M 5 -10
    C 10 -10 10 10 5 10

    M 10 -10
    C 15 -10 15 10 10 10
    C 40 10 40 -10 10 -10`)
  path(d=`M 32 0 L 50 0` :class="{ on: props.outputs && props.outputs.q }")

  text(v-if="props.index != undefined" x="40" y="15" font-size="8") {{ props.index }}
</template>
