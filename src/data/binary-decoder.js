export default {
  components: [
    {
      type: 'static',
      label: 'A',
      x: 110,
      y: 5
    },
    {
      type: 'static',
      label: 'B',
      x: 100,
      y: 105
    },
    {
      type: 'not',
      x: 180,
      y: 5
    },
    {
      type: 'not',
      x: 170,
      y: 105
    },
    {
      type: 'and',
      x: 300,
      y: 100
    },
    {
      type: 'and',
      x: 300,
      y: 150
    },
    {
      type: 'and',
      x: 300,
      y: 200
    },
    {
      type: 'and',
      x: 300,
      y: 250
    },
    {
      type: 'result',
      label: '0',
      x: 370,
      y: 100
    },
    {
      type: 'result',
      label: '1',
      x: 370,
      y: 150
    },
    {
      type: 'result',
      label: '2',
      x: 370,
      y: 200
    },
    {
      type: 'result',
      label: '3',
      x: 370,
      y: 250
    }
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
