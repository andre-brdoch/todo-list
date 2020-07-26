<template>
  <transition name="settings">
    <div v-if="isVisible" class="list-settings">
      <ul class="list">
        <li class="setting">
          <span @click="$store.commit('deleteList')" class="setting-text"
            >Delete list</span
          >
        </li>
        <li class="setting">
          <span
            @click.stop="$store.commit('toggleColorPickerVisibility')"
            class="setting-text"
            >Change Color</span
          >
          <transition name="color-picker">
            <div
              v-if="$store.state.colorPickerIsVisible"
              class="color-picker-ctn"
            >
              <color-picker />
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </transition>
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
.list-settings {
  position: relative;

  &.settings-enter-active,
  &.settings-leave-active {
    transition: all 0.2s ease-out;
    transition-property: opacity, transform;
  }
  &.settings-enter {
    opacity: 0;
    transform: translate(-3px, 5px) scale(0.95);
  }
  &.settings-leave-active {
    transition-timing-function: ease;
  }
  &.settings-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }

  &:after {
    // triangle shape
    $_size: 6px;

    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: $_size solid transparent;
    border-right: $_size solid transparent;
    border-bottom: $_size * 2 solid white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.list {
  list-style: none;
  margin: 0;
  padding: 1.5rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
.setting:not(:last-child) {
  margin-bottom: 0.75rem;
}
.setting-text {
  white-space: nowrap;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.color-picker-ctn {
  margin-top: 0.75rem;

  &.color-picker-enter-active,
  &.color-picker-leave-active {
    transition: all 0.2s ease-out;
    transition-property: opacity, transform;
  }
  &.color-picker-enter,
  &.color-picker-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
