<script>
// https://www.electronics-tutorials.ws/combination/comb_2.html

import binaryAdder from '../data/binary-adder'
import binaryDecoder from '../data/binary-decoder'
import digitalComparator from '../data/digital-comparator'
import dFlipFlop from '../data/d-flip-flop'

export default {
  data: () => ({
    selected: 0,
    menu: [
      { title: 'Binary adder', data: binaryAdder },
      { title: 'Binary decoder', data: binaryDecoder },
      { title: 'Digital comparator', data: digitalComparator },
      { title: 'D flip-flop', data: dFlipFlop }
    ]
  }),
  created() {
    this.$emit('select', this.menu[this.selected].data)
  },
  methods: {
    select(data) {
      this.$emit('select', data)
    }
  }
}
</script>

<template lang="pug">
  header
    a(v-for="item in menu" :key="item.title" @click="select(item.data)") {{ item.title }}
</template>

<style lang="scss">
a {
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  margin: 15px;
}
</style>
