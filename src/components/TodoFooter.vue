<template>
  <footer class="footer">
    <div @click.stop="showColorPicker" class="clr-btn">Change color</div>
    <ul v-show="colorPickerIsVisible" class="color-picker">
      <li
        v-for="color in colors"
        :key="color"
        @click="$emit('color-change', color)"
        class="color"
        :style="`background-color: ${color};`"
      />
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TodoFooter",

  data() {
    return {
      colors: [
        "#ffb900",
        "#f7630c",
        "#e81123",
        "#0078d7",
        "#107c10",
        "#881798"
      ],
      colorPickerIsVisible: false
    };
  },

  methods: {
    showColorPicker() {
      this.colorPickerIsVisible = true;
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
