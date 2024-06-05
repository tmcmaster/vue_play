<template>
  <div class="page-nav-bar" :style="{ justifyContent: justifyContent }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageNavBar",
  props: {
    justifyContent: {
      type: String,
      default: "center"
    }
  }
};
</script>

<style scoped>
.page-nav-bar {
  display: flex;
  width: 100%;
}

</style>
