<template functional>
  <svg width="40" height="40">
    <g :transform="`translate(${20}, ${20})`">
      <path
        :transform="`rotate(${-40})`"
        :d="
          ` M0 -10
          L7 8
          Q 0 4 -7 8
          L 0 -10
        `
        "
      />
    </g>
  </svg>
</template>

<style scoped>
path {
  fill: white;
}
</style>
