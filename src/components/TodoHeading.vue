<template>
  <div class="heading-ctn">
    <form v-show="inputIsVisible" @submit.prevent="updateHeading" class="form">
      <input
        v-model="newHeading"
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
  data() {
    return {
      inputIsVisible: false,
      newHeading: ""
    };
  },

  computed: {
    heading() {
      return this.$store.state.name;
    }
  },

  methods: {
    updateHeading() {
      this.$store.commit("setName", this.newHeading);
      this.hideInput();
    },
    showInput() {
      this.newHeading = this.heading;
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
