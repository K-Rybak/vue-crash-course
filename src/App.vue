<template>
  <h1>TodoList application</h1>
  <AddForm 
    @add-todo="addTodo"
  />
  <hr>
  <TodoList
    v-bind:todos="todos" 
    @remove-item="removeTodo"
  />
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddForm from './components/AddForm.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Купить хлеб', completed: false},
        {id: 2, title: 'Купить масло', completed: false},
        {id: 3, title: 'Купить молоко', completed: false}
      ]
    }
  },
  components: {
    TodoList,
    AddForm
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(x => x.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
