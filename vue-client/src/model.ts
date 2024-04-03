import type { Ref } from 'vue'

export interface TodoItem {
  id: string
  isComplete: boolean
  name: string
}

export const TodoItemsInjectionKey = Symbol('todoItems')

export type TodoItemsInjectionValue = {
  todos: Ref<TodoItem[]>
  createTodo: (name: string) => TodoItem
}
