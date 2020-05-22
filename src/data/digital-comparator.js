export default {
  components: [
    // 0
    { type: 'static', label: 'A', x: 200, y: 110 },
    { type: 'static', label: 'B', x: 210, y: 270 },

    // 2
    { type: 'not', x: 280, y: 110 },
    { type: 'not', x: 280, y: 270 },

    // 4
    { type: 'and', x: 340, y: 140 },
    { type: 'and', x: 340, y: 240 },
    { type: 'nor', x: 400, y: 190 },

    // 7
    { type: 'result', label: 'A < B', x: 470, y: 140 },
    { type: 'result', label: 'A = B', x: 470, y: 190 },
    { type: 'result', label: 'A > B', x: 470, y: 240 }
  ],
  connections: [
    { output: { c: 0, o: 'q' }, input: { c: 2, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 3, i: 'a' } },

    // And gates
    { output: { c: 2, o: 'q' }, input: { c: 4, i: 'a' } },
    { output: { c: 1, o: 'q' }, input: { c: 4, i: 'b' } },
    { output: { c: 0, o: 'q' }, input: { c: 5, i: 'a' } },
    { output: { c: 3, o: 'q' }, input: { c: 5, i: 'b' } },

    // Nor gate
    { output: { c: 4, o: 'q' }, input: { c: 6, i: 'a' } },
    { output: { c: 5, o: 'q' }, input: { c: 6, i: 'b' } },

    // Results
    { output: { c: 4, o: 'q' }, input: { c: 7, i: 'a' } },
    { output: { c: 6, o: 'q' }, input: { c: 8, i: 'a' } },
    { output: { c: 5, o: 'q' }, input: { c: 9, i: 'a' } }
  ]
}
