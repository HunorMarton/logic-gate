<script>
import SelectIcon from './SelectIcon'
import MoveIcon from './MoveIcon'

export default {
  components: {
    SelectIcon,
    MoveIcon
  },
  props: {
    mode: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="pug">
header
  button(
    :class="{selected: mode == 'select'}"
    @click="$emit('mode', 'select')"
  )
    SelectIcon
  button(
    :class="{selected: mode == 'move'}"
    @click="$emit('mode', 'move')"
  )
    MoveIcon
</template>

<style lang="scss" scoped>
header {
  background-color: #2c2c2c;
  height: 40px;
  padding: 0 40px;
}

button {
  border: none;
  cursor: pointer;
  background: transparent;
  height: 40px;
  outline: none;
  padding: 0;
}

button:hover {
  background-color: black;
}

button.selected {
  background-color: #18a0fb;
}
</style>
