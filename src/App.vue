<script>
import Header from './components/header'
import Board from './Board.vue'

export default {
  name: 'App',
  components: {
    Header,
    Board
  },
  data: () => ({
    mode: 'move',
    boards: [
      {
        components: [
          {
            type: 'static',
            x: 100,
            y: 0,
            props: false
          },
          {
            type: 'not',
            x: 200,
            y: 0
          },
          {
            type: 'and',
            x: 300,
            y: 50
          },
          {
            type: 'or',
            x: 300,
            y: 100
          }
        ],
        connections: [
          { output: { c: 0, o: 'q' }, input: { c: 1, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
          { output: { c: 1, o: 'q' }, input: { c: 2, i: 'b' } },
          { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
          { output: { c: 1, o: 'q' }, input: { c: 3, i: 'b' } }
        ]
      },
      {
        components: [
          {
            type: 'static',
            x: 110,
            y: 0,
            props: false
          },
          {
            type: 'static',
            x: 100,
            y: 50,
            props: false
          },

          {
            type: 'not',
            x: 200,
            y: 0
          },
          {
            type: 'and',
            x: 200,
            y: 50
          },
          {
            type: 'nand',
            x: 200,
            y: 100
          },
          {
            type: 'or',
            x: 200,
            y: 150
          },
          {
            type: 'nor',
            x: 200,
            y: 200
          },
          {
            type: 'xor',
            x: 200,
            y: 250
          }
        ],
        connections: [
          { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },

          { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 4, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 5, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 6, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 7, i: 'a' } },

          { output: { c: 1, o: 'q' }, input: { c: 3, i: 'b' } },
          { output: { c: 1, o: 'q' }, input: { c: 4, i: 'b' } },
          { output: { c: 1, o: 'q' }, input: { c: 5, i: 'b' } },
          { output: { c: 1, o: 'q' }, input: { c: 6, i: 'b' } },
          { output: { c: 1, o: 'q' }, input: { c: 7, i: 'b' } }
        ]
      },
      {
        components: [
          {
            type: 'static',
            x: 110,
            y: 0,
            props: false
          },

          {
            type: 'not',
            x: 200,
            y: 0
          },
          {
            type: 'and',
            x: 200,
            y: 50
          },
          {
            type: 'nand',
            x: 200,
            y: 100
          },
          {
            type: 'or',
            x: 200,
            y: 150
          },
          {
            type: 'nor',
            x: 200,
            y: 200
          },
          {
            type: 'xor',
            x: 200,
            y: 250
          }
        ],
        connections: [
          { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 4, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 5, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 6, i: 'a' } }
        ]
      },
      {
        components: [
          {
            type: 'static',
            x: 100,
            y: 0,
            props: false
          },
          {
            type: 'static',
            x: 110,
            y: 150,
            props: true
          },
          {
            type: 'not',
            x: 170,
            y: 50
          },
          {
            type: 'nand',
            x: 250,
            y: 5
          },
          {
            type: 'nand',
            x: 340,
            y: 10
          },
          {
            type: 'nand',
            x: 250,
            y: 145
          },
          {
            type: 'nand',
            x: 350,
            y: 140
          }
        ],
        connections: [
          { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
          { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
          { output: { c: 1, o: 'q' }, input: { c: 3, i: 'b' } },
          { output: { c: 3, o: 'q' }, input: { c: 4, i: 'a' } },
          { output: { c: 6, o: 'q' }, input: { c: 4, i: 'b' } },
          { output: { c: 2, o: 'q' }, input: { c: 5, i: 'a' } },
          { output: { c: 1, o: 'q' }, input: { c: 5, i: 'b' } },
          { output: { c: 4, o: 'q' }, input: { c: 6, i: 'a' } },
          { output: { c: 5, o: 'q' }, input: { c: 6, i: 'b' } }
        ]
      }
    ]
  }),
  methods: {
    setMode(mode) {
      this.mode = mode
    }
  }
}
</script>

<template lang="pug">
div
  Header(:mode="mode" @mode="setMode")
  svg.main(width="600" height="1200")
    Board(
      :mode="mode"
      :components="boards[2].components"
      :connections="boards[2].connections"
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
  stroke: #000;
  stroke-width: 1.5px;
  user-select: none;

  text {
    fill: #000;
    stroke-width: 0;
  }
}
</style>
