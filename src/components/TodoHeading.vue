<template>
  <div class="heading-ctn">
    <form v-show="inputIsVisible" @submit.prevent="updateHeading" class="form">
      <input
        v-model="heading"
        @blur="updateHeading"
        ref="input"
        class="input"
      />
    </form>
    <h3
      v-show="!inputIsVisible"
      @click.stop="showInput"
      @focus.stop="showInput"
      class="heading"
    >
      {{ heading }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "TodoHeading",

  props: {
    name: { type: String, default: "New todo list" }
  },

  data() {
    return {
      heading: this.name,
      inputIsVisible: false
    };
  },

  methods: {
    updateHeading() {
      this.hideInput();
    },
    showInput() {
      const { input } = this.$refs;
      this.inputIsVisible = true;
      // setTimeout to make it work on FF
      setTimeout(() => {
        input.focus();
        input.select();
        input.setSelectionRange(0, input.value.length);
      }, 0);
    },
    hideInput() {
      this.inputIsVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
.heading {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}
</style>
