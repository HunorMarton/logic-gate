<script>
// https://www.electronics-tutorials.ws/combination/comb_2.html

import binaryAdder from '../data/binary-adder'
import binaryDecoder from '../data/binary-decoder'
import digitalComparator from '../data/digital-comparator'
import dFlipFlop from '../data/d-flip-flop'
import multiplexer from '../data/multiplexer'

export default {
  data: () => ({
    selected: 2,
    menu: [
      { title: 'Binary adder', data: binaryAdder },
      { title: 'Binary decoder', data: binaryDecoder },
      { title: 'Digital comparator', data: digitalComparator },
      { title: 'D flip-flop', data: dFlipFlop },
      { title: 'Multiplexer', data: multiplexer }
    ]
  }),
  created() {
    this.$emit('select', this.menu[this.selected].data)
  },
  methods: {
    select(index, data) {
      this.selected = index
      this.$emit('select', data)
    },
    about() {
      this.selected = 'about'
      this.$emit('about')
    }
  }
}
</script>

<template lang="pug">
  header
    a(
      v-for="(item, index) in menu" :key="item.title"
      :class="{ active: index == selected }"
      @click="select(index, item.data)"
    ) {{ item.title }}
    span |
    a.about(@click="about" :class="{ active: selected == 'about' }") About
</template>

<style lang="scss" scoped>
header {
  color: lightgray;
  background-color: #260f26;
}

header * {
  margin: 20px;
}

a {
  cursor: pointer;
  display: inline-block;
  font-size: 0.9em;
}

.active {
  color: white;
}
</style>
