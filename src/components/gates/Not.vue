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
  path(d=`
    M 0 0 L 10 0

    M 10 -10
    L 10 10
    L 30 0
    L 10 -10

    M 40 0 L 50 0`)

  circle(r="5" cx="35" cy="0")
  text(v-if="props.model" x="40" y="-5") {{ props.model.outputs.q == undefined ? 'x' : Number(props.model.outputs.q) }}
  text(v-if="props.index != undefined" x="40" y="15" font-size="8") {{ props.index }}
</template>
