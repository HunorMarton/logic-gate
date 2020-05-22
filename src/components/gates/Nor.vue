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
  path(d=`
    M 0 -5 L 10 -5
    M 0 5 L 10 5

    M 7 -10
    C 12 -10 12 10 7 10
    C 40 10 40 -10 7 -10

    M 39 0 L 50 0`)

  circle(r="3" cx="36" cy="0")
  text(v-if="props.model" x="40" y="-5") {{ props.model.outputs.q == undefined ? 'x' : Number(props.model.outputs.q) }}
  text(v-if="props.index != undefined" x="40" y="15" font-size="8") {{ props.index }}
</template>
