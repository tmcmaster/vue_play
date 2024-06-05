<script>
import DeleteIcon from "@/components/todos/icons/DeleteIcon.vue";
import Checkbox from "@/components/todos/TodoCheckbox.vue";
import IconButton from "@/components/todos/TodoDeleteButton.vue";
import TodoTitle from "@/components/todos/TodoTitle.vue";

export default {
  name: "TodoItem",
  components: {TodoTitle, IconButton, Checkbox, DeleteIcon},
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        done: false,
      })
    },
    onDelete: {
      type: Function,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  }
};

</script>

<template>
  <main class="todo-item">
    <TodoTitle :title="todo.title"/>
    <div class="actions">
      <Checkbox :onChange="onChange" :todo="todo"/>
      <IconButton :onDelete="onDelete"></IconButton>
    </div>
  </main>
</template>


<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.actions {
  display: flex;
  align-items: center;
}

</style>
