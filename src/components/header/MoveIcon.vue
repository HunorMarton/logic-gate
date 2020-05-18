<template functional>
  <svg width="40" height="40">
    <g :transform="`translate(${20}, ${20})`">
      <line class="arrowLine" :x1="-5" :y1="0" :x2="5" :y2="0" />
      <line class="arrowLine" :x1="0" :y1="-5" :x2="0" :y2="5" />

      <g
        v-for="r in [0, 180, 270, 90]"
        :key="r"
        :transform="`rotate(${r}) translate(${0}, ${-10})`"
      >
        <polygon
          class="arrowHead"
          :points="
            `0,0,
        -3,${5}
        +3,${5}`
          "
        />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.arrowLine {
  stroke: #8c99a6;
  stroke-width: 2px;
  stroke: white;
}
.arrowHead {
  fill: white;
}
</style>
