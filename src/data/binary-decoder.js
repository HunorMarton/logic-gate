export default {
  components: [
    { type: 'static', label: 'A', x: 210, y: 105 },
    { type: 'static', label: 'B', x: 200, y: 205 },
    { type: 'not', x: 280, y: 105 },
    { type: 'not', x: 270, y: 205 },

    { type: 'and', x: 400, y: 200 },
    { type: 'and', x: 400, y: 250 },
    { type: 'and', x: 400, y: 300 },
    { type: 'and', x: 400, y: 350 },

    { type: 'result', label: '0', x: 470, y: 200 },
    { type: 'result', label: '1', x: 470, y: 250 },
    { type: 'result', label: '2', x: 470, y: 300 },
    { type: 'result', label: '3', x: 470, y: 350 }
  ],
  connections: [
    { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 3, i: 'a' } },

    // And gates
    { output: { c: 2, o: 'q' }, input: { c: 4, i: 'a' } },
    { output: { c: 3, o: 'q' }, input: { c: 4, i: 'b' } },
    { output: { c: 2, o: 'q' }, input: { c: 5, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 5, i: 'b' } },
    { output: { c: 0, o: 'q' }, input: { c: 6, i: 'a' } },
    { output: { c: 3, o: 'q' }, input: { c: 6, i: 'b' } },
    { output: { c: 0, o: 'q' }, input: { c: 7, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 7, i: 'b' } },

    // Results
    { output: { c: 4, o: 'q' }, input: { c: 8, i: 'a' } },
    { output: { c: 5, o: 'q' }, input: { c: 9, i: 'a' } },
    { output: { c: 6, o: 'q' }, input: { c: 10, i: 'a' } },
    { output: { c: 7, o: 'q' }, input: { c: 11, i: 'a' } }
  ]
}
