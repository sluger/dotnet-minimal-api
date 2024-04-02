<script setup lang="ts">
import { inject, type Ref } from 'vue';
import type { TodoItem } from '../model';

const { todos } = inject<{ todos: Ref<TodoItem[]> }>("todoitems");

// TODO:

</script>

<template>
    <div class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.name }} {{ todo.isComplete }}
        </li>
    </div>
</template>
