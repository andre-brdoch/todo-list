<template>
  <div v-if="isVisible" class="list-settings">
    <ul class="list">
      <li class="setting">
        <span
          @click="$store.commit('toggleColorPickerVisibility')"
          class="setting-text"
          >Change Color</span
        >
        <color-picker />
      </li>
    </ul>
  </div>
</template>

<script>
import ColorPicker from "components/ColorPicker.vue";

export default {
  name: "ListSettings",

  components: { ColorPicker },

  computed: {
    isVisible() {
      return this.$store.state.settingsAreOpen;
    }
  },

  watch: {
    isVisible(val) {
      if (!val) return;
      document.addEventListener("click", this.outsideClickListener);
    }
  },

  methods: {
    outsideClickListener(e) {
      if (!this.$el.contains(e.target)) {
        this.$store.commit("hideSettings");
        this.removeClickListener();
      }
    },
    removeClickListener() {
      document.removeEventListener("click", this.outsideClickListener);
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  margin: 0;
  padding: 1.5rem;
  background-color: white;
  border-radius: 3px;
  text-align: right;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.07);
}
.setting-text {
  white-space: nowrap;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
