<template>
  <article class="todo">
    <header class="header">
      <h3 class="heading">{{ name }}</h3>
    </header>
    <ul class="list">
      <li v-for="(item, i) in list" :key="item.text + i" class="task">
        <span>{{ item.text }}</span>
        <span @click.stop="deleteItem(i)" class="delete-item-btn">x</span>
      </li>
      <li class="task create-task">
        <form @submit.prevent.stop="addItem" class="form">
          <input v-model="newTask" placeholder="Add new task" class="input" />
        </form>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "TodoList",

  props: {
    name: { type: String },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      newTask: ""
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
    }
  }
};
</script>

<style scoped lang="scss">
.todo {
  padding: 1.5rem;
  background-color: #fad872;
  border-radius: 3px;
  max-width: 40rem;
}
.header {
  margin-bottom: 1.5rem;
}
.heading {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
