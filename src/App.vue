<script>
import Board from './Board.vue'

export default {
  name: 'App',
  components: {
    Board
  },
  data: () => ({
    width: 1000,
    height: 1000,
    zoom: 1.2,
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
            x: 190,
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
            x: 290,
            y: 5
          },
          {
            type: 'nand',
            x: 380,
            y: 10
          },
          {
            type: 'nand',
            x: 290,
            y: 145
          },
          {
            type: 'nand',
            x: 390,
            y: 140
          },
          {
            type: 'result',
            x: 470,
            y: 10
          },
          {
            type: 'result',
            x: 500,
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
          { output: { c: 5, o: 'q' }, input: { c: 6, i: 'b' } },
          { output: { c: 4, o: 'q' }, input: { c: 7, i: 'a' } },
          { output: { c: 6, o: 'q' }, input: { c: 8, i: 'a' } }
        ]
      }
    ]
  })
}
</script>

<template lang="pug">
div
  svg.main(:width="width" :height="height" :viewBox="`0, 0, ${width/zoom}, ${height/zoom}`")
    Board(
      :zoom="zoom"
      :components="boards[3].components"
      :connections="boards[3].connections"
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
