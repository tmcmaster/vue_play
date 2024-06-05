<template>
  <div class="page-footer">
    <div :style="{ flex: leftFlex }" class="page-footer-left">
      <slot name="left"><span></span></slot>
    </div>
    <div :style="{ flex: centerFlex }" class="page-footer-center">
      <slot name="center"><span></span></slot>
    </div>
    <div :style="{ flex: rightFlex }" class="page-footer-right">
      <slot name="right"><span></span></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  props: {
    leftFlex: {
      type: String,
      default: "1"
    },
    centerFlex: {
      type: String,
      default: "1"
    },
    rightFlex: {
      type: String,
      default: "1"
    }
  }
};
</script>

<style scoped>
.page-footer {
  display: flex;
  width: 100%;
}
.page-footer-left, .page-footer-center, .page-footer-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
