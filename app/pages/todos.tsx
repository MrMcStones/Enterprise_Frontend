import { useEffect, useState } from "react"
import { Todo } from "../_types/todo"

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:8080/api/todos")
      const data: Todo[] = await response.json()
      setTodos(data)
    }
    fetchTodos()
  }, [])

  const toggleComplete = async (id: number, completed: boolean) => {
    await fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    })
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      )
    )
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
            <button onClick={() => toggleComplete(todo.id, todo.completed)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
