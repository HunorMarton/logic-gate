<template functional lang="pug">
  path(:d="`M ${props.x1} ${props.y1} L ${props.x1} ${props.y2} L ${props.x2} ${props.y2}`")
</template>

<style lang="scss" scoped>
path {
  stroke-linejoin: round;
  stroke-opacity: 0.1;
}
</style>
