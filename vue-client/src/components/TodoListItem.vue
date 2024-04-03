<script setup lang="ts">
import { inject, ref } from 'vue'
import { TodoItemsInjectionKey, type TodoItem } from '../model'

// props
const props = defineProps<{
  item: TodoItem
}>()

// state
const name = ref<string>(props.item.name)
const toggle = ref<boolean>(props.item.isComplete)

// inject
const todoProvider = inject<{
  updateTodo: (id: string, todo: TodoItem) => void
  deleteTodo: (id: string) => void
}>(TodoItemsInjectionKey)

const handleNameChange = () => {
  todoProvider?.updateTodo(props.item.id, {
    id: props.item.id,
    name: name.value,
    isComplete: props.item.isComplete
  })
}

const handleCompleteChange = () => {
  todoProvider?.updateTodo(props.item.id, {
    id: props.item.id,
    name: props.item.name,
    isComplete: toggle.value
  })
}

const handleDelete = () => {
  todoProvider?.deleteTodo(props.item.id)
}
</script>

<template>
  <li class="todo-list-item">
    <input
      type="checkbox"
      v-model="toggle"
      @change="handleCompleteChange"
      style="vertical-align: middle"
    />
    &nbsp;
    <input v-model="name" @change="handleNameChange" />
    &nbsp;
    <button @click="handleDelete">Delete</button>
  </li>
</template>
