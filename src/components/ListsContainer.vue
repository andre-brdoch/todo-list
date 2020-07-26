<template>
  <ul class="lists-container">
    <li v-for="(item, i) in lists" :key="Date.now()" class="li">
      <todo-list
        v-on:list-deleted="removeItemAtIndex(i)"
        :name="item.name"
      ></todo-list>
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
    },
    removeItemAtIndex(i) {
      this.lists.splice(i, 1);
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
