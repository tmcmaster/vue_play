import {defineStore} from 'pinia'

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => {
        const numberToGenerate = 100;
        const todos = Array.from({length: numberToGenerate},
            (_, index) => ({id: index + 1, title: `Todo ${index + 1}`, done: false}));
        return {
            todos: todos,
            nextId: numberToGenerate + 1,
        }
    },
    getters: {
        incompleteTaskCount() {
            return this.todos.filter(todo => !todo.done).length;
        }
    },
    actions: {
        deleteTodo(id) {
            console.log(`Deleting(${id})`);
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        updateTodoStatus(id, done) {
            console.log(`Updating(${id}) : ${done}`);
            this.todos = this.todos.map(
                (e) => e.id === id
                    ? {id: e.id, title: e.title, done: done}
                    : e );

        },
        addNewTodo(title) {
            console.log(`Adding(${title})`);
            const id = this.nextId;
            this.nextId = this.nextId + 1;
            this.todos = [
                {
                    id: id,
                    title: title,
                    done: false,
                },
                ...this.todos
            ];
        }
    }
})