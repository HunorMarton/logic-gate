export default {
  components: [
    { type: 'static', label: 'A', x: 200, y: 100, props: true },
    { type: 'static', label: 'B', x: 210, y: 205 },

    { type: 'xor', x: 280, y: 105 },
    { type: 'and', x: 280, y: 200 },

    { type: 'result', label: 'Sum', x: 340, y: 105 },
    { type: 'result', label: 'Carry out', x: 350, y: 200 }
  ],
  connections: [
    { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
    { output: { c: 0, o: 'q' }, input: { c: 3, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 2, i: 'b' } },
    { output: { c: 1, o: 'q' }, input: { c: 3, i: 'b' } },
    { output: { c: 2, o: 'q' }, input: { c: 4, i: 'a' } },
    { output: { c: 3, o: 'q' }, input: { c: 5, i: 'a' } }
  ]
}
