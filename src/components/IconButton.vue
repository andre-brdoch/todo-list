<template>
  <div class="icon-ctn">
    <div :style="`background-image: url('${src}');`" class="icon" />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true }
  }
};
</script>

<style scoped lang="scss">
.icon-ctn {
  width: 1.7rem;
  padding: 4px;
  border-radius: 3px;
  cursor: pointer;
  transition: box-shadow 0.15s ease-out;
}
.icon {
  background: center center/contain no-repeat;
  transition: transform 0.15s ease-out;

  &:after {
    content: "";
    display: block;
    /* square */
    padding-top: 100%;
  }
}
.icon-ctn:hover,
.icon-ctn:focus,
.icon-ctn:active {
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15);
  & .icon {
    transform: scale(0.95);
  }
}
.icon-ctn:active {
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.15);
}
</style>
