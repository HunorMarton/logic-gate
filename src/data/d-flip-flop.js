export default {
  components: [
    { type: 'static', label: 'D', x: 200, y: 100, props: false },
    { type: 'static', label: 'Enable', x: 320, y: 175, props: true },

    { type: 'not', x: 270, y: 250 },
    { type: 'nand', x: 390, y: 105 },
    { type: 'nand', x: 480, y: 110 },
    { type: 'nand', x: 390, y: 245 },
    { type: 'nand', x: 490, y: 240 },

    { type: 'result', label: 'Q', x: 570, y: 110 },
    { type: 'result', label: '!Q', x: 600, y: 240 }
  ],
  connections: [
    { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
    { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 3, i: 'b' } },
    { output: { c: 3, o: 'q' }, input: { c: 4, i: 'a' } },
    { output: { c: 6, o: 'q' }, input: { c: 4, i: 'b' } },
    { output: { c: 1, o: 'q' }, input: { c: 5, i: 'a' } },
    { output: { c: 2, o: 'q' }, input: { c: 5, i: 'b' } },
    { output: { c: 4, o: 'q' }, input: { c: 6, i: 'a' } },
    { output: { c: 5, o: 'q' }, input: { c: 6, i: 'b' } },
    { output: { c: 4, o: 'q' }, input: { c: 7, i: 'a' } },
    { output: { c: 6, o: 'q' }, input: { c: 8, i: 'a' } }
  ]
}
