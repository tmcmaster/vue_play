<script>
import DeleteIcon from "@/components/todos/icons/DeleteIcon.vue";

export default {
  components: {DeleteIcon},
  props: {
    onDelete: {
      type: Function,
      required: true
    },
  }
}
</script>

<template>
  <button @click="onDelete">
    <DeleteIcon/>
  </button>
</template>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  width: 1.5rem;
}
</style>