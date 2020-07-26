<template>
  <footer class="footer">
    <img
      @click.stop="toggleColorPicker"
      class="clr-btn"
      :src="colorsIcon"
      alt="change color"
    />
    <color-picker
      v-if="colorPickerIsVisible"
      v-on:color-change="handleColorChange"
    />
  </footer>
</template>

<script>
import ColorPicker from "components/ColorPicker.vue";
import colorsIcon from "icons/colors.svg";

export default {
  name: "TodoFooter",

  components: { ColorPicker },

  data() {
    return {
      colorPickerIsVisible: false,
      colorsIcon
    };
  },

  methods: {
    toggleColorPicker() {
      this.colorPickerIsVisible = !this.colorPickerIsVisible;
    },
    handleColorChange(color) {
      this.$emit("color-change", color);
      this.colorPickerIsVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  margin-top: 1.5rem;
  border-top: 1px solid white;
  padding-top: 1.5rem;
}
.clr-btn {
  cursor: pointer;
}
</style>
