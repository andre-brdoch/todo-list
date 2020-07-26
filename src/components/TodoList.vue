<template>
  <CardComponent :color="$store.state.color">
    <TodoHeader />
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
  </CardComponent>
</template>

<script>
import CardComponent from "components/CardComponent.vue";
import TodoHeader from "components/TodoHeader.vue";
import closeIcon from "icons/close.svg";
import clonedeep from "lodash/clonedeep";
import Vue from "vue";
import Vuex from "vuex";
import store from "store/todo-list";

Vue.use(Vuex);

export default {
  components: { CardComponent, TodoHeader },

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
      closeIcon
    };
  },

  beforeCreate() {
    this.$store = new Vuex.Store(clonedeep(store));
  },

  created() {
    this.$store.commit("setName", this.name);
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
