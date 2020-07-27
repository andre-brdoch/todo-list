<template>
  <div
    :style="`--color-light: ${colorLight}; --color-dark: ${colorDark};`"
    class="checkbox-ctn"
  >
    <input type="checkbox" :id="id" class="input" />
    <span class="checkmark" />
  </div>
</template>

<script>
import { lightenColor, darkenColor } from "utils/colors";

export default {
  props: {
    id: { type: String, required: true }
  },

  computed: {
    color() {
      return this.$store.state.color;
    },
    colorLight() {
      return lightenColor(this.color);
    },
    colorDark() {
      return darkenColor(this.color);
    }
  }
};
</script>

<style scoped lang="scss">
$_size: 1.5rem;

%overlayed {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.checkbox-ctn {
  position: relative;
  cursor: pointer;
  user-select: none;
  width: $_size;
  height: $_size;
}
.input {
  // hide  default input
  opacity: 0;
  // place it exactly behind the checkmark
  @extend %overlayed;
  z-index: 999;
  margin: 0;
  padding: 0;
  width: $_size;
  height: $_size;
  &:hover {
    cursor: pointer;
  }
}
.checkmark {
  @extend %overlayed;
  height: $_size;
  width: $_size;
  border-radius: 1px;
  transition: background-color 0.2s ease-out;
  background-color: white;
}
.input:checked ~ .checkmark {
  background-color: var(--color-dark);
}
.checkmark:after {
  content: "";
  position: absolute;
  left: $_size * 0.36;
  top: $_size / 5;
  width: $_size / 5;
  height: $_size * 0.4;
  transform: rotate(45deg);
  border-width: 0 $_size * 0.12 $_size * 0.12 0;
  border-style: solid;
  transition: all 0.2s ease-out;
  transition-property: border-color, opacity;
  border-color: var(--color-light);
  opacity: 0;
}
.input:checked ~ .checkmark:after {
  opacity: 1;
}
</style>
