<template>
  <span class="title">{{ title }}</span>
</template>
<script>
export default {
  name: 'TodoTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>

.title {
  flex-grow: 1;
}

</style>