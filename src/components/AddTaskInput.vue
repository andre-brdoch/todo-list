<template>
  <form @submit.prevent.stop="addItem" class="item-form">
    <input
      v-model="newTask"
      @blur="addItem"
      placeholder="Add new task"
      :style="
        `
        --border-color: ${borderColor};
        --border-color-focus: ${borderColorFocus};
      `
      "
      class="input"
    />
  </form>
</template>

<script>
import kebabCase from "lodash/kebabcase";
import tinycolor from "tinycolor2";

export default {
  data() {
    return {
      newTask: ""
    };
  },

  computed: {
    color() {
      return this.$store.state.color;
    },
    borderColor() {
      return tinycolor(this.color).darken(25);
    },
    borderColorFocus() {
      return "white";
    }
  },

  methods: {
    addItem() {
      if (this.newTask.length === 0) return;
      const task = {
        text: this.newTask,
        id: kebabCase(this.newTask + Date.now())
      };
      this.$store.commit("addTask", task);
      this.newTask = "";
    }
  }
};
</script>

<style scoped lang="scss">
.input {
  padding: 0.75rem 1.5rem;
  border-radius: 3px;
  background-color: transparent;
  font-family: $font-family;
  font-size: $font-size-task;
  color: $font-color-task;
  transition: all 0.2s ease-in-out;
  transition-property: border-color;
  border: 2px solid var(--border-color);
  border-style: inset;

  &:focus {
    outline: none;
    border-color: var(--border-color-focus);
  }
  &::placeholder {
    color: $font-color-task;
    opacity: 0.7;
  }
}
</style>
