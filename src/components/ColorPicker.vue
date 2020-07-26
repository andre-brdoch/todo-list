<template>
  <ul class="color-picker">
    <li
      v-for="color in colors"
      :key="color"
      @click="changeColor(color)"
      class="color"
      :style="`background-color: ${color};`"
    />
  </ul>
</template>

<script>
export default {
  name: "ColorPicker",

  data() {
    return {
      colors: ["#ffb900", "#f7630c", "#e81123", "#0078d7", "#107c10", "#881798"]
    };
  },

  methods: {
    changeColor(color) {
      this.$emit("color-change", color);
    }
  }
};
</script>

<style scoped lang="scss">
.color-picker {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.color {
  width: 1.5rem;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    // square
    padding-top: 100%;
  }
}
</style>
