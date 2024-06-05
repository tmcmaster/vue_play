import {createRouter, createWebHistory} from 'vue-router'
import PostView from '@/views/posts/PostView.vue';
import AuthorsView from '@/views/posts/AuthorsView.vue'
import AuthorView from '@/views/posts/AuthorView.vue'
import TheWelcome from "@/components/about/Welcome.vue";
import TodoListView from "@/views/todos/TodoListView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'about', component: TheWelcome},
        {path: '/posts', name: 'posts', component: () => import('@/views/posts/PostsView.vue')},
        {path: '/post/:id', name: 'post', component: PostView},
        {path: '/author/:username', name: 'author', component: AuthorView},
        {path: '/todos', name: 'todos', component: TodoListView},
        {path: '/authors', name: 'authors', component: AuthorsView}
    ]
})

export default router
