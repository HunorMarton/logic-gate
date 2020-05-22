export default {
  components: [
    { type: 'static', label: 'A', x: 200, y: 100 },
    { type: 'static', label: 'I0', x: 200, y: 50 },
    { type: 'static', label: 'I1', x: 200, y: 150 },

    { type: 'nand', x: 270, y: 100 },

    { type: 'nand', x: 330, y: 55 },
    { type: 'nand', x: 330, y: 145 },

    { type: 'nand', x: 400, y: 100 },
    { type: 'result', label: 'Q', x: 470, y: 100 }
  ],
  connections: [
    { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
    { output: { c: 0, o: 'q' }, input: { c: 3, i: 'b' } },

    { output: { c: 1, o: 'q' }, input: { c: 4, i: 'a' } },
    { output: { c: 0, o: 'q' }, input: { c: 4, i: 'b' } },
    { output: { c: 3, o: 'q' }, input: { c: 5, i: 'a' } },
    { output: { c: 2, o: 'q' }, input: { c: 5, i: 'b' } },

    { output: { c: 4, o: 'q' }, input: { c: 6, i: 'a' } },
    { output: { c: 5, o: 'q' }, input: { c: 6, i: 'b' } },
    { output: { c: 6, o: 'q' }, input: { c: 7, i: 'a' } }
  ]
}
