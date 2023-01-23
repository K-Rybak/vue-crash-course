<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" 
                v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong>
            {{ todo.title }}
        </span>
        <button class="rm" 
            v-on:click="$emit('remove-item', todo.id)"
        >&times;</button>
    </li>   
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: {
                type: Number
            }
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background-color: red;
        color: #fff;
        font-weight: bold;
        border-radius: 50%;
    }

    .done {
        text-decoration: line-through;
    }

    input {
        margin-right: 1rem;
    }
</style>