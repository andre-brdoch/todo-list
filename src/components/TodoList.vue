<template>
  <CardComponent :color="$store.state.color">
    <TodoHeader />
    <ul class="list">
      <li v-for="(task, i) in tasks" :key="task.text" class="task-ctn">
        <TaskItem :text="task.text" :i="i" />
      </li>
      <li class="task create-task">
        <AddTaskInput />
      </li>
    </ul>
  </CardComponent>
</template>

<script>
import AddTaskInput from "components/AddTaskInput.vue";
import CardComponent from "components/CardComponent.vue";
import TaskItem from "components/TaskItem.vue";
import TodoHeader from "components/TodoHeader.vue";
import clonedeep from "lodash/clonedeep";
import Vue from "vue";
import Vuex from "vuex";
import store from "store/todo-list";

Vue.use(Vuex);

export default {
  components: { AddTaskInput, CardComponent, TaskItem, TodoHeader },

  props: {
    name: { type: String, default: "" }
  },

  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    isDeleted() {
      return this.$store.state.isDeleted;
    }
  },

  watch: {
    isDeleted() {
      this.$emit("list-deleted", true);
      this.$destroy();
    }
  },

  beforeCreate() {
    this.$store = new Vuex.Store(clonedeep(store));
  },

  created() {
    this.$store.commit("setName", this.name);
  }
};
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.task-ctn {
  padding: 0.375rem 0;
}
</style>
