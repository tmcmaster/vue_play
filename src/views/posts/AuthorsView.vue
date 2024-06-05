<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '@/stores/posts/author.js'

const { authors } = storeToRefs(useAuthorStore())
const { fetchAuthors } = useAuthorStore()

fetchAuthors()
</script>

<template>
  <div>
    <p v-if="authors" v-for="author in authors" :key="author.id">
      <RouterLink :to="`/author/${author.username}`">{{ author.name }}</RouterLink>
    </p>
  </div>
</template>

<style scoped>
  div {
    padding: 16px;
    box-sizing: border-box;
  }
</style>