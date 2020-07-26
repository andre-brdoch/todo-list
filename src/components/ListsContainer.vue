<template>
  <ul class="lists-container">
    <li v-for="(item, i) in lists" :key="i">
      <todo-list :name="item.name"></todo-list>
    </li>
    <li>
      <div @click.stop="addItem" class="add-btn">+</div>
    </li>
  </ul>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "ListsContainer",

  components: { TodoList },

  data() {
    return { lists: [] };
  },

  methods: {
    addItem() {
      this.lists.push({ name: "New Todo List" });
    }
  }
};
</script>

<style scoped lang="scss">
.lists-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.add-btn {
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 8rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
}
</style>
