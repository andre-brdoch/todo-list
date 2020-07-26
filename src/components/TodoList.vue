<template>
  <CardComponent :color="color">
    <todo-heading :name="name"></todo-heading>
    <ul class="list">
      <li v-for="(item, i) in list" :key="item.text" class="task-ctn">
        <input type="checkbox" :id="item.text" class="checkbox" />
        <label :for="item.text" class="task-text">{{ item.text }}</label>
        <img
          @click.stop="deleteItem(i)"
          class="delete-item-btn"
          :src="closeIcon"
          alt="delete task"
        />
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
import CardComponent from "components/CardComponent.vue";
import TodoFooter from "components/TodoFooter.vue";
import TodoHeading from "components/TodoHeading.vue";
import { colors } from "../colors";
import closeIcon from "icons/close.svg";

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
      color: colors[0],
      closeIcon
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
.task-ctn {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.75rem;
  align-items: center;
  justify-content: start;
  position: relative;
  padding: 0.375rem 3rem 0.375rem 0;
}
.checkbox {
  margin: 0;
  padding: 0;
}
.task-text {
  font-size: 1.6rem;
  cursor: pointer;
}
.delete-item-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 1.5rem;
  padding: 2px;
}
</style>
