<script setup>
import {storeToRefs} from 'pinia'
import {useTodoStore} from "@/stores/todos/todos.js";
import PageLayout from '@/components/layout/PageLayout.vue'
import TodoItem from '@/components/todos/TodoItem.vue'

const todoStore = useTodoStore()
const {todos} = storeToRefs(todoStore)

const pageTheme = {
  header: {},
  footer: {}
};

</script>

<template>

  <PageLayout :theme="pageTheme">
    <template v-slot:headerLeading></template>
    <template v-slot:header>
      <h2>Todo List</h2>
    </template>
    <template v-slot:headerTrailing>
      <span>items: {{ todos.length }}</span>
    </template>
    <template #nav></template>
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