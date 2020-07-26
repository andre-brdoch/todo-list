<template>
  <form @submit.prevent.stop="addItem" class="item-form">
    <input
      v-model="newTask"
      @blur="addItem"
      placeholder="Add new task"
      :style="
        `
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
import { lightenColor, darkenColor } from "utils/colors";

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
      return lightenColor(this.color);
    },
    textColor() {
      return darkenColor(this.color);
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
  @include inputField();
  padding: 0.75rem 0;
  font-size: $font-size-task;
  color: var(--text-color);
  border-color: var(--border-color);

  &::placeholder {
    color: var(--text-color);
  }
}
</style>
