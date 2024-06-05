<script>
export default {
  name: "PageHeader",
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

<template>
  <div class="page-header">
    <div :style="{ flex: leftFlex }" class="page-header-left">
      <slot name="left">
        <span></span>
      </slot>
    </div>
    <div :style="{ flex: centerFlex }" class="page-header-center">
      <slot name="center">
        <span></span>
      </slot>
    </div>
    <div :style="{ flex: rightFlex }" class="page-header-right">
      <slot name="right">
        <span></span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  width: 100%;
}

.page-header-left, .page-header-center, .page-header-right {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
