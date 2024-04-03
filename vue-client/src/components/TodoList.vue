<script setup lang="ts">
import { inject, ref } from 'vue'
import { TodoItemsInjectionKey, type TodoItemsInjectionValue } from '../model'
import TodoListItem from './TodoListItem.vue'

// state
const newTodo = ref<string>('')

// inject
const todoProvider = inject<TodoItemsInjectionValue>(TodoItemsInjectionKey)
const todos = todoProvider?.todos

const handleAddTodo = () => {
  todoProvider?.createTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <ul class="todo-list">
    <TodoListItem v-for="todo in todos" :item="todo" :key="todo.id" />
  </ul>
  What needs to be done?<br />
  <input v-model="newTodo" placeholder="Item" />&nbsp;
  <button @click="handleAddTodo">Add</button>
</template>

<style scoped>
ul {
  padding-left: 0;
  list-style: none;
  line-height: 2rem;
  margin-bottom: 1rem;
}
</style>
