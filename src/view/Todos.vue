<template>
    <h2>TodoList application</h2>
    <router-link to="/">Home</router-link>
    <AddForm @add-todo="addTodo" />
    <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList 
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos" 
        @remove-item="removeTodo"
    />
    <p v-else>No element</p>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddForm from '@/components/AddForm.vue';
import Loader from '@/components/Loader.vue';

export default {
    name: 'app',
    data() {
        return {
            todos: [],
            loading: true,
            filter: 'all'
        }
    },
    computed: {
        filteredTodos() {
            if (this.filter === 'all'){
                return this.todos
            }
            else if (this.filter === 'completed') {
                return this.todos.filter(t => t.completed)
            }
            else if (this.filter === 'not-completed'){
                return this.todos.filter(t => !t.completed)
            }
        }
    },
    components: {
        TodoList,
        AddForm,
        Loader
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
            setTimeout(() => {
                this.todos = json;
                this.loading = false;
            }, 1000)

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