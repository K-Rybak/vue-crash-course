<template>
    <div>
        <ul>
            <TodoListItem 
                v-for="(todo, i) of todos"
                v-bind:todo="todo"
                v-bind:index="i"
                v-on:remove-item="removeTodo"
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
    },
    methods: {
        removeTodo(id){
            this.$emit('remove-item', id)
        }
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