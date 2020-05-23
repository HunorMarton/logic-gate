<script>
// https://www.electronics-tutorials.ws/combination/comb_2.html

import binaryAdder from '../data/binary-adder'
import binaryDecoder from '../data/binary-decoder'
import digitalComparator from '../data/digital-comparator'
import dFlipFlop from '../data/d-flip-flop'
import multiplexer from '../data/multiplexer'

export default {
  data: () => ({
    selected: 0,
    menu: [
      { title: 'Binary adder', data: binaryAdder },
      { title: 'Binary decoder', data: binaryDecoder },
      { title: 'Digital comparator', data: digitalComparator },
      { title: 'D flip-flop', data: dFlipFlop },
      { title: 'Multiplexer', data: multiplexer },
      { title: 'Blank', data: { components: [], connections: [] } }
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
    a(
      v-for="(item, index) in menu" :key="item.title"
      :class="{ active: index == selected}"
      @click="select(item.data)"
    ) {{ item.title }}
</template>

<style lang="scss">
header {
  color: lightgray;
  background-color: #260f26;
}

a {
  cursor: pointer;
  display: inline-block;
  font-size: 0.9em;
  margin: 20px;
}
a.active {
  color: white;
}
</style>
