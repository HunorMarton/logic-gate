<script>
export default {
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    r: {
      type: Number,
      required: true
    },
    zoom: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'gray'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dragging: false,
    prevX: undefined,
    prevY: undefined
  }),
  mounted() {
    this.$refs.draggable.addEventListener('mousedown', this.onMouseDown, false)
    window.addEventListener('mousemove', this.onMouseMove, false)
    window.addEventListener('mouseup', this.onMouseUp, false)
  },
  methods: {
    onMouseDown(event) {
      this.dragging = true
      this.prevX = event.clientX
      this.prevY = event.clientY
      this.$emit('dragstart')
    },
    onMouseMove() {
      if (this.dragging) {
        const dx = (event.clientX - this.prevX) / this.zoom
        const dy = (event.clientY - this.prevY) / this.zoom

        this.$emit('drag', { dx, dy })

        this.prevX = event.clientX
        this.prevY = event.clientY
      }
    },
    onMouseUp() {
      if (this.dragging) {
        this.dragging = false
        this.$emit('dragend')
      }
    }
  }
}
</script>

<template lang="pug">
g(:transform="`translate(${x} ${y})`")
  slot
  circle.draggable(
    ref="draggable"
    :class="{ disabled }"
    :style="{ fill: color }"
    :r="r" :cx="0" :cy="0")
</template>

<style lang="scss" scoped>
.draggable {
  fill: #404e7c;
  stroke: none;
  opacity: 0.1;
  cursor: pointer;
}

.disabled {
  display: none;
}

.draggable:hover {
  opacity: 0.3;
}
</style>
