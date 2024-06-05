<script setup>
import {storeToRefs} from 'pinia'
import {useTodoStore} from "@/stores/todos/todos.js";
import PageLayout from '@/components/layout/PageLayout.vue'
import TodoItem from '@/components/todos/TodoItem.vue'
import TodoAddNew from "@/components/todos/TodoAddNew.vue";

const todoStore = useTodoStore()
const {todos} = storeToRefs(todoStore)

const pageTheme = {
  header: {
    leftFlex: "flex-start",
    rightFlex: "flex-end"
  },
  footer: {}
};

</script>

<template>

  <PageLayout :theme="pageTheme">
    <template v-slot:headerLeading>
      <span class="total-count">Total: {{ todos.length }}</span>
    </template>
    <template v-slot:header>
      <h2>Todo List</h2>
    </template>
    <template v-slot:headerTrailing>
      <span>Incomplete: {{ todoStore.incompleteTaskCount }}</span>
    </template>
    <template v-slot:nav>
      <TodoAddNew :onAddItem="(newItem) => todoStore.addNewTodo(newItem)"/>
    </template>
    <template v-slot:mainBody>
      <main>
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :onDelete="() => todoStore.deleteTodo(todo.id)"
            :onChange="() => todoStore.updateTodoStatus(todo.id, !todo.done)"
            :todo="{
              id: todo.id,
              title: todo.title,
              done: todo.done
            }"/>
      </main>
    </template>
    <template v-slot:footerLeading></template>
    <template v-slot:footer></template>
    <template v-slot:footerTrailing></template>
  </PageLayout>

</template>

<style scoped>
</style>