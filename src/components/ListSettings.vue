<template>
  <div v-if="areOpen" class="list-settings">
    <ul class="list">
      <li class="setting">
        <span @click.stop="toggleColorPicker" class="setting-text"
          >Change Color</span
        >
        <color-picker
          v-if="colorPickerIsVisible"
          v-on:color-change="handleColorChange"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ColorPicker from "components/ColorPicker.vue";
import colorsIcon from "icons/colors.svg";

export default {
  name: "ListSettings",

  components: { ColorPicker },

  props: {
    areOpen: { type: Boolean, default: false }
  },

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
.list {
  list-style: none;
  margin: 0;
  padding: 1.5rem;
  background-color: white;
  border-radius: 3px;
  text-align: right;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.07);
}
.setting-text {
  white-space: nowrap;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
