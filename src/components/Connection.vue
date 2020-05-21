<script>
export default {
  props: {
    x1: {
      type: Number,
      required: true
    },
    y1: {
      type: Number,
      required: true
    },
    x2: {
      type: Number,
      required: true
    },
    y2: {
      type: Number,
      required: true
    }
  },
  computed: {
    path() {
      if (this.x2 > this.x1) {
        return `
          M ${this.x1} ${this.y1}
          l ${(this.x2 - this.x1) / 2} 0
          l 0 ${this.y2 - this.y1}
          L ${this.x2} ${this.y2}`
      }
      return `
        M ${this.x1} ${this.y1}
        l 0 ${(this.y2 - this.y1) / 2}
        l ${this.x2 - this.x1} 0
        L ${this.x2} ${this.y2}`
    }
  }
}
</script>

<template lang="pug">
  path(:d="path")
</template>

<style lang="scss" scoped>
path {
  stroke-linejoin: round;
  stroke-opacity: 0.1;
}
</style>
