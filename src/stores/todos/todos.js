import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
        todos: Array.from({ length: 100 },
            (_, index) => ({ id: index + 1, title: `Todo ${index + 1}` }))
    }),
    getters: {

    },
    actions: {

    }
})