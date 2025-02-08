import { useState } from "react"
import { useRouter } from "next/router"

export default function AddTodo() {
  const [title, setTitle] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    })
    router.push("/todos")
  }

  return (
    <div>
      <h1>Add a New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
