<script>
import { Xor as model } from '../../model'

export default {
  extraData: {
    model,
    o: {
      q: { x: 25, y: 0 }
    },
    i: {
      a: { x: -25, y: -5 },
      b: { x: -25, y: 5 }
    }
  }
}
</script>

<template functional lang="pug">
g(transform="translate(-25)")
  path(d=`
    M 0 -5 L 8 -5
    M 0 5 L 8 5

    M 5 -10
    C 10 -10 10 10 5 10

    M 10 -10
    C 15 -10 15 10 10 10
    C 40 10 40 -10 10 -10

    M 32 0 L 50 0`)

  text(x="40" y="-5") {{ props.model.outputs.q == undefined ? 'x' : Number(props.model.outputs.q) }}
  text(x="40" y="15" font-size="8") {{ props.model.id }}
</template>
