<template>
  <CardComponent :color="color">
    <todo-heading :name="name"></todo-heading>
    <ul class="list">
      <li v-for="(item, i) in list" :key="item.text" class="task">
        <input type="checkbox" :id="item.text" class="checkbox" />
        <label :for="item.text">{{ item.text }}</label>
        <span @click.stop="deleteItem(i)" class="delete-item-btn">x</span>
      </li>
      <li class="task create-task">
        <form @submit.prevent.stop="addItem" class="item-form">
          <input
            v-model="newTask"
            @blur="addItem"
            placeholder="Add new task"
            class="item-input"
          />
        </form>
      </li>
    </ul>
    <TodoFooter v-on:color-change="changeColor"></TodoFooter>
  </CardComponent>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoHeading from "./TodoHeading.vue";

export default {
  name: "TodoList",

  components: { CardComponent, TodoFooter, TodoHeading },

  props: {
    name: { type: String, default: "" },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      newTask: "",
      color: "yellow"
    };
  },

  methods: {
    addItem() {
      if (this.newTask.length === 0) return;
      const item = { text: this.newTask };
      this.list.push(item);
      this.newTask = "";
    },
    deleteItem(i) {
      this.list.splice(i, 1);
    },
    changeColor(color) {
      this.color = color;
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
