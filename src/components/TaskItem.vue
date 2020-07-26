<template>
  <div class="ctn">
    <input type="checkbox" :id="text" class="checkbox" />
    <label :for="text" class="task-text">{{ text }}</label>
    <img
      @click="$store.commit('deleteTaskAtIndex', i)"
      class="delete-item-btn"
      :src="closeIcon"
      alt="delete task"
    />
  </div>
</template>

<script>
import closeIcon from "icons/close.svg";

export default {
  props: {
    text: { type: String, required: true },
    i: { type: Number, required: true }
  },

  data() {
    return {
      closeIcon
    };
  }
};
</script>

<style scoped lang="scss">
.ctn {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.75rem;
  align-items: center;
  justify-content: start;
  position: relative;
  padding-right: 3rem;
}
.checkbox {
  margin: 0;
  padding: 0;
}
.task-text {
  font-family: $font-family;
  font-size: $font-size-task;
  color: $font-color-task;
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
