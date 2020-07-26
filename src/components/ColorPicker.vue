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
import { colors } from "../colors";

export default {
  name: "ColorPicker",

  data() {
    return {
      colors
    };
  },

  computed: {
    isVisible() {
      return this.$store.state.colorPickerIsVisible;
    }
  },

  watch: {
    isVisible(val) {
      if (!val) return;
      document.addEventListener("click", this.outsideClickListener);
    }
  },

  methods: {
    changeColor(color) {
      this.$store.commit("setColor", color);
      this.$store.commit("toggleColorPickerVisibility");
    },
    outsideClickListener(e) {
      if (!this.$el.contains(e.target)) {
        this.$store.commit("hideColorPicker");
        this.removeClickListener();
      }
    },
    removeClickListener() {
      document.removeEventListener("click", this.outsideClickListener);
    }
  }
};
</script>

<style scoped lang="scss">
.color-picker {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1.5rem, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}
.color {
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    // square
    padding-top: 100%;
  }
}
</style>
