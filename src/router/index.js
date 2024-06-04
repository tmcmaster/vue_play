import {createRouter, createWebHistory} from 'vue-router'
import PostsView from "@/views/PostsView.vue";
import PostView from '@/views/PostView.vue';
import AuthorView from '@/views/AuthorView.vue'
import TheWelcome from "@/components/TheWelcome.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {path: '/', name: 'welcome', component: TheWelcome},
      {path: '/posts', name: 'posts', component: PostsView},
      {path: '/post/:id', name: 'post', component: PostView},
      {path: '/author/:username', name: 'author', component: AuthorView},
      {path: '/authors', name: 'authors', component: () => import('../views/AuthorsView.vue')}
    ]
})

export default router
