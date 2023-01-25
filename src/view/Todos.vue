<template>
    <h2>TodoList application</h2>
    <router-link to="/">Home</router-link>
    <AddForm @add-todo="addTodo" />
    <hr>
    <TodoList v-bind:todos="todos" @remove-item="removeTodo" />
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddForm from '@/components/AddForm.vue';

export default {
    name: 'app',
    data() {
        return {
        todos: []
        }
    },
    components: {
        TodoList,
        AddForm
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
            this.todos = json
        })
    },
    methods: {
        removeTodo(id) {
        this.todos = this.todos.filter(x => x.id !== id)
        },
        addTodo(todo) {
        this.todos.push(todo)
        }
    }
}
</script>