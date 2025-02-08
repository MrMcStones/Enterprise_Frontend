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

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  )
}
