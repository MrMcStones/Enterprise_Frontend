"use client"
import { deleteTodo, updateTodo } from "../lib/api"

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: any[]
  setTodos: any
}) {
  const handleDelete = async (id: number) => {
    await deleteTodo(id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggle = async (id: number, completed: boolean) => {
    const updatedTodo = await updateTodo(id, { completed: !completed })
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)))
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between p-2 border-b">
          <span
            onClick={() => handleToggle(todo.id, todo.completed)}
            className={
              todo.completed ? "line-through cursor-pointer" : "cursor-pointer"
            }
          >
            {todo.title}
          </span>
          <button
            onClick={() => handleDelete(todo.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )
}
