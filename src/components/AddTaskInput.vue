<template>
  <form @submit.prevent.stop="addItem" class="item-form">
    <input
      v-model="newTask"
      @blur="addItem"
      placeholder="Add new task"
      class="item-input"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: ""
    };
  },

  methods: {
    addItem() {
      if (this.newTask.length === 0) return;
      const task = { text: this.newTask };
      this.$store.commit("addTask", task);
      this.newTask = "";
    }
  }
};
</script>
