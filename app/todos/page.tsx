"use client"
import { useEffect, useState } from "react"
import { getTodos } from "@/app/lib/api"
import TodoList from "./TodoList"
import { Todo } from "@/app/lib/api"

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function fetchTodos() {
      try {
        const data = await getTodos()
        setTodos(data)
      } catch (error) {
        console.error("Failed to fetch todos", error)
      }
    }
    fetchTodos()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
