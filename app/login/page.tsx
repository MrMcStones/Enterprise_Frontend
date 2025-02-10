"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/app/lib/auth"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
      router.push("/todos")
    } catch {
      alert("Invalid credentials")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="border p-2 ml-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
