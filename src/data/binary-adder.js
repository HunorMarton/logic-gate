export default {
  components: [
    { type: 'static', x: 100, y: 0, props: true },
    { type: 'static', x: 110, y: 105 },
    { type: 'xor', x: 180, y: 5 },
    { type: 'and', x: 180, y: 100 },
    { type: 'result', x: 240, y: 5 },
    { type: 'result', x: 250, y: 100 }
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
