<template>
  <ul class="lists-container">
    <li v-for="(item, i) in lists" :key="i" class="li">
      <todo-list :name="item.name"></todo-list>
    </li>
    <li class="li">
      <CardComponent color="lightgrey">
        <div @click="addItem" class="add-btn">+</div>
      </CardComponent>
    </li>
  </ul>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "ListsContainer",

  components: { CardComponent, TodoList },

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
.li {
  min-height: 10rem;
  // stretch content
  display: grid;
}
.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
}
</style>
