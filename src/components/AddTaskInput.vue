<template>
  <form @submit.prevent.stop="addItem" class="item-form">
    <input
      v-model="newTask"
      @blur="addItem"
      placeholder="Add new task"
      :style="
        `
        --background-color: ${backgroundColor};
        --text-color: ${textColor};
        --border-color: ${borderColor};
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
    backgroundColor() {
      return this.color;
    },
    borderColor() {
      return tinycolor(this.color).lighten(15);
    },
    textColor() {
      return tinycolor(this.color).darken(35);
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
  padding: 0.75rem 0;
  font-family: $font-family;
  font-size: $font-size-task;
  transition: all 0.2s ease-in-out;
  transition-property: background-color, border-color, color;
  background-color: var(--background-color);
  color: var(--text-color);
  border: none;
  border-bottom: 3px solid var(--border-color);

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--text-color);
    opacity: 1;
  }
  &:focus::placeholder {
    color: transparent;
  }
}
</style>
