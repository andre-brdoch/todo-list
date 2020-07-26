<template>
  <article class="todo">
    <header class="header">
      <form
        v-show="headingInputIsVisible"
        @submit.prevent="updateHeading"
        class="heading-form"
      >
        <input
          v-model="heading"
          @blur="updateHeading"
          ref="headingInput"
          class="heading-input"
        />
      </form>
      <h3
        v-show="!headingInputIsVisible"
        @click.stop="showHeadingInput"
        @focus.stop="showHeadingInput"
        class="heading"
      >
        {{ heading }}
      </h3>
    </header>
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
  </article>
</template>

<script>
export default {
  name: "TodoList",

  props: {
    name: { type: String, default: "New todo list" },
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
      heading: this.name,
      headingInputIsVisible: false
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
    updateHeading() {
      this.hideHeadingInput();
    },
    showHeadingInput() {
      const { headingInput } = this.$refs;
      this.headingInputIsVisible = true;
      // setTimeout to make it work on FF
      setTimeout(() => {
        headingInput.focus();
        headingInput.select();
        headingInput.setSelectionRange(0, headingInput.value.length);
      }, 0);
    },
    hideHeadingInput() {
      this.headingInputIsVisible = false;
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
