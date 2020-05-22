<script>
import Header from './components/Header.vue'
import Board from './Board.vue'

export default {
  name: 'App',
  components: {
    Header,
    Board
  },
  data: () => ({
    width: 1000,
    height: 1000,
    zoom: 1.2,
    board: undefined
  }),
  methods: {
    select(board) {
      this.board = board
    }
  }
}
</script>

<template lang="pug">
div
  Header(@select="select")
  svg.main(:width="width" :height="height" :viewBox="`0, 0, ${width/zoom}, ${height/zoom}`")
    Board(
      v-if="board"
      :zoom="zoom"
      :board="board"
      transform="translate(50, 50)"
    )
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

body {
  font-family: 'Roboto Mono', monospace;
  padding: 0;
  margin: 0;
}

.main {
  border: 1px solid #ccc;
  fill: none;
  stroke: #404e7c;
  stroke-width: 1px;
  user-select: none;

  text {
    fill: #404e7c;
    stroke-width: 0;
  }
}
</style>
