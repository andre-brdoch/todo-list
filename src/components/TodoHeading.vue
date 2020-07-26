<template>
  <div
    class="heading-ctn"
    :style="`--text-color: ${textColor}; --border-color: ${borderColor};`"
  >
    <form v-show="inputIsVisible" @submit.prevent="updateHeading" class="form">
      <input
        v-model="newHeading"
        @blur="updateHeading"
        ref="input"
        class="input"
      />
    </form>
    <h3
      v-show="!inputIsVisible"
      @click="showInput"
      @focus="showInput"
      class="heading"
    >
      {{ heading }}
    </h3>
  </div>
</template>

<script>
import { lightenColor, darkenColor } from "utils/colors";

export default {
  data() {
    return {
      inputIsVisible: false,
      newHeading: ""
    };
  },

  computed: {
    heading() {
      return this.$store.state.name;
    },
    color() {
      return this.$store.state.color;
    },
    borderColor() {
      return lightenColor(this.color);
    },
    textColor() {
      return darkenColor(this.color);
    }
  },

  methods: {
    updateHeading() {
      this.$store.commit("setName", this.newHeading);
      this.hideInput();
    },
    showInput() {
      this.newHeading = this.heading;
      const { input } = this.$refs;
      this.inputIsVisible = true;
      // setTimeout to make it work on FF
      setTimeout(() => {
        input.focus();
        input.select();
        input.setSelectionRange(0, input.value.length);
      }, 0);
    },
    hideInput() {
      this.inputIsVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
$_fontSize: 2rem;

.heading {
  font-size: $_fontSize;
  font-weight: bold;
  margin: 0;
  padding: 0 0 $input-padding-bottom;
  border-bottom: 3px solid transparent;
  transition: color 0.2s ease-in-out;
  color: var(--text-color);
}
.input {
  @include inputField();
  font-size: $_fontSize;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--border-color);

  &::placeholder {
    color: var(--text-color);
  }
}
</style>
