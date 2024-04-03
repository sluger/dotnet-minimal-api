<script setup lang="ts">
import TodoProvider from '../providers/TodoProvider.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <main>
    <TodoProvider>
      <div class="todo-view">
        <h1>Todos</h1>
      </div>
      <TodoList></TodoList>
    </TodoProvider>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
