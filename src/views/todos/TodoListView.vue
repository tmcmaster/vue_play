<script setup>
import { storeToRefs } from 'pinia'
import {useTodoStore} from "@/stores/todos/todos.js";
import PageLayout from '@/components/layout/PageLayout.vue'

const { todos } = storeToRefs(useTodoStore())

const pageTheme = {
  header: {},
  footer: { }
};

</script>

<template>

  <PageLayout :theme="pageTheme">
    <template v-slot:headerLeading></template>
    <template v-slot:header>
      <h2>Todo List</h2>
    </template>
    <template v-slot:headerTrailing>
      <span>items: {{todos.length}}</span>
    </template>
    <template #nav></template>
    <template v-slot:mainBody>
      <ul>
        <li v-if="todos" v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
      </ul>
    </template>
    <template v-slot:footerLeading></template>
    <template v-slot:footer></template>
    <template v-slot:footerTrailing></template>
  </PageLayout>

</template>

<style scoped>

</style>