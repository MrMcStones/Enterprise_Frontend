"use client"
import { useEffect, useState } from "react"
import { getTodos } from "@/lib/api"
import TodoList from "./TodoList.tsx"

export default function TodosPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
