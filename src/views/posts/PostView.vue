<script setup>
import {useRoute} from 'vue-router'
import {storeToRefs} from 'pinia'
import {useAuthorStore} from '@/stores/posts/author.js'
import {usePostStore} from '@/stores/posts/post.js'
import Post from '@/components/posts/Post.vue'

const route = useRoute()
const {getPostAuthor} = storeToRefs(useAuthorStore())
const {fetchAuthors} = useAuthorStore()
const {post, loading, error} = storeToRefs(usePostStore())
const {fetchPost} = usePostStore()

fetchAuthors()
fetchPost(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="post">
      <post :post="post" :author="getPostAuthor"></post>
    </p>
  </div>
</template>