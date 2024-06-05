import {defineStore} from 'pinia'

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
        todos: Array.from({length: 100},
            (_, index) => ({id: index + 1, title: `Todo ${index + 1}`, done: false}))
    }),
    getters: {},
    actions: {
        deleteTodo(id) {
            console.log(`Deleting(${id})`);
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        updateTodoStatus(id, done) {
            console.log(`Updating(${id}) : ${done}`);
            // this.todos = this.todos.map((e) => e.id === id ? {id: e.id, done: done} : e );
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.done = done;
            }
        }
    }
})