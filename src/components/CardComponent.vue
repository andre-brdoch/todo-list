<template>
  <article class="card" :style="`background-color: ${color};`">
    <slot />
  </article>
</template>

<script>
export default {
  name: "CardComponent",

  props: {
    color: { type: String, default: "lightgrey" }
  }
};
</script>

<style scoped lang="scss">
.card {
  border-radius: 3px;
  padding: 1.5rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.07);
  // stretch content:
  display: grid;
  transition: background-color 0.2s ease-out;
}
</style>
