<template>
    <div>
        <ul>
            <TodoListItem 
                v-for="todo of todos"
                v-bind:todo="todo"
            />
        </ul>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
    props: ['todos'],
    components: {
        TodoListItem
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>