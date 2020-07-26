<template>
  <footer class="footer">
    <div @click.stop="toggleColorPicker" class="clr-btn">
      Change color
    </div>
    <color-picker
      v-if="colorPickerIsVisible"
      v-on:color-change="handleColorChange"
    />
  </footer>
</template>

<script>
import ColorPicker from "./ColorPicker.vue";

export default {
  name: "TodoFooter",

  components: { ColorPicker },

  data() {
    return {
      colorPickerIsVisible: false
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
.clr-btn {
  cursor: pointer;
}
</style>
