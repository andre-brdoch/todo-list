<template>
  <header class="header">
    <TodoHeading />
    <div class="settings-wrapper">
      <img
        @click.stop="$store.commit('toggleSettings')"
        class="settings-btn"
        :src="settingsIcon"
        alt="open settings"
      />
      <div class="settings">
        <ListSettings />
      </div>
    </div>
  </header>
</template>

<script>
import ListSettings from "components/ListSettings.vue";
import TodoHeading from "components/TodoHeading.vue";
import settingsIcon from "icons/options_hori.svg";

export default {
  components: { ListSettings, TodoHeading },

  data() {
    return {
      settingsIcon
    };
  }
};
</script>

<style scoped lang="scss">
$_iconSize: 2rem;

.header {
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-gap: 3rem;
  padding-bottom: 1.5rem;
}
.settings-wrapper {
  position: relative;
}
.settings-btn {
  display: block;
  width: $_iconSize;
  cursor: pointer;
}
.settings {
  position: absolute;
  z-index: 9999;
  top: $_iconSize + 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
