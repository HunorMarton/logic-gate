<script>
import Header from './components/Header.vue'
import Board from './Board.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Board,
    About
  },
  data: () => ({
    width: 1000,
    height: 1000,
    zoom: 1.2,
    board: undefined,
    about: false
  }),
  mounted() {
    this.width = this.$refs.main.clientWidth
    this.height = this.$refs.main.clientHeight
  },
  methods: {
    select(board) {
      this.board = board
      this.about = false
    },
    goToAboutPage() {
      this.about = true
    }
  }
}
</script>

<template lang="pug">
div.page
  Header(@select="select" @about="goToAboutPage")
  About(v-if="about")
  svg.main(v-else ref="main" width="100%" height="100%" :viewBox="`0, 0, ${width/zoom}, ${height/zoom}`")
    Board(
      v-if="board"
      :zoom="zoom"
      :board="board"
    )
</template>

<style lang="scss">
// Color palette: https://coolors.co/86cb92-71b48d-404e7c-251f47-260f26

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
  grid-template-rows: auto 1fr auto;
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
