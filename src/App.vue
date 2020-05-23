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
  mounted() {
    this.width = this.$refs.main.clientWidth
    this.height = this.$refs.main.clientHeight
  },
  methods: {
    select(board) {
      this.board = board
    }
  }
}
</script>

<template lang="pug">
div.page
  Header(@select="select")
  svg.main(ref="main" width="100%" height="100%" :viewBox="`0, 0, ${width/zoom}, ${height/zoom}`")
    Board(
      v-if="board"
      :zoom="zoom"
      :board="board"
    )
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
html {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
}

.page {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
}

.main {
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
