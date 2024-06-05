<script setup>
import {RouterLink} from 'vue-router'
import {storeToRefs} from 'pinia'
import {usePostStore} from '@/stores/posts/post.js'

const {posts, loading, error} = storeToRefs(usePostStore())
const {fetchPosts} = usePostStore()

fetchPosts()
</script>

<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="posts" v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      <p>{{ post.body }}</p>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 16px;
  box-sizing: border-box;
}

div > p {
  padding: 4px 16px 16px 16px;
}
</style>