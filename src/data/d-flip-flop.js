export default {
  components: [
    {
      type: 'static',
      x: 100,
      y: 0,
      props: false
    },
    {
      type: 'static',
      x: 200,
      y: 75,
      props: true
    },
    {
      type: 'not',
      x: 170,
      y: 150
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
    { output: { c: 1, o: 'q' }, input: { c: 5, i: 'a' } },
    { output: { c: 2, o: 'q' }, input: { c: 5, i: 'b' } },
    { output: { c: 4, o: 'q' }, input: { c: 6, i: 'a' } },
    { output: { c: 5, o: 'q' }, input: { c: 6, i: 'b' } },
    { output: { c: 4, o: 'q' }, input: { c: 7, i: 'a' } },
    { output: { c: 6, o: 'q' }, input: { c: 8, i: 'a' } }
  ]
}
