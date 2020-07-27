<template>
  <div class="ctn">
    <CheckBox :id="text" />
    <label :for="text" :style="`color: ${textColor};`" class="task-text">{{
      text
    }}</label>
    <div class="delete-item-btn">
      <IconButton
        :src="closeIcon"
        @click.native="$store.commit('deleteTaskAtIndex', i)"
      />
    </div>
  </div>
</template>

<script>
import CheckBox from "components/CheckBox.vue";
import IconButton from "components/IconButton.vue";
import closeIcon from "icons/close.svg";
import { darkenColor } from "utils/colors";

export default {
  props: {
    text: { type: String, required: true },
    i: { type: Number, required: true }
  },

  components: { CheckBox, IconButton },

  data() {
    return {
      closeIcon
    };
  },

  computed: {
    textColor() {
      return darkenColor(this.$store.state.color);
    }
  }
};
</script>

<style scoped lang="scss">
.ctn {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.5rem;
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
  transition: color 0.2s ease-in-out;
}
.delete-item-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
