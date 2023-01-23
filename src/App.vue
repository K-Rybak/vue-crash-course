<template>
  <h1>TodoList application</h1>
  <hr>
  <TodoList
    v-bind:todos="todos" 
  />
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Купить хлеб', completed: true},
        {id: 2, title: 'Купить масло', completed: false},
        {id: 3, title: 'Купить молоко', completed: false}
      ]
    }
  },
  components: {
    TodoList
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
