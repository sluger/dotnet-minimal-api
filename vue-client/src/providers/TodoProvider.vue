<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import type { TodoItem } from '../model';

const todos = ref<TodoItem[]>([])

async function getTodos(): Promise<TodoItem[] | undefined> {
    const res = await fetch('http://localhost:5255/todoitems', { mode: 'cors', cache: 'default' })
    if (res.ok) {
        const data = await res.json() as TodoItem[]
        return data
    } else {
        console.error('Could not fetch todo items.')
        return undefined
    }

}

async function createTodo(name: string) {
    const res = await fetch('http://localhost:5255/todoitems', {
        method: 'POST', mode: 'cors', headers: { "Content-Type": 'application/json' }, body: JSON.stringify({ name, isCompleted: false })
    })
    if (!res.ok) {
        console.error(`HTTP ${res.status}: Could not create todo item ${name}.`)
    } else {
        const data = await res.json() as TodoItem;
        todos.value = [...todos.value, data];
    }
}

async function updateTodo(id: string, todo: TodoItem) {
    const { name, isComplete } = todo;
    const res = await fetch(`http://localhost:5255/todoitems/${id}`, {
        method: 'PUT', mode: 'cors', headers: { "Content-Type": 'application/json' }, body: JSON.stringify({ name, isComplete })
    })
    if (!res.ok) {
        console.error(`HTTP ${res.status}: Could not update todo item ${name}.`)
    } else {
        const idx = todos.value.findIndex((v) => v.id === id);
        if (idx >= 0) {
            todos.value = [...todos.value].splice(idx, 1, todo);
        } else {
            console.error('Could not update todo items.')
        }
    }
}

async function deleteTodo(id: string) {
    const res = await fetch(`http://localhost:5255/todoitems/${id}`, {
        method: 'DELETE', mode: 'cors'
    })
    if (!res.ok) {
        console.error(`HTTP ${res.status}: Could not delete todo item ${id}.`)
    } else {
        todos.value = todos.value.filter((todo) => todo.id !== id);
    }
}

onMounted(async () => {
    const data = await getTodos()
    if (data) {
        todos.value = data;
    }
})

provide("todoitems", { todos, createTodo, updateTodo, deleteTodo })

</script>

<template>
    <slot></slot>
</template>