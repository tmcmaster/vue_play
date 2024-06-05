<script>
export default {
  name: "PageFooter",
  props: {}
};
</script>

<template>
  <slot></slot>
</template>


<style scoped>
main {
  padding: 4px;
  box-sizing: border-box;
}

article {
  border: solid 1px #ccc;
  padding: 4px;
  width: 100%;
  height: 100%;
}
</style>
