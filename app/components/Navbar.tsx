"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token") // Ta bort JWT-token vid utloggning
    router.push("/login")
  }

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Todo App</h1>
      <div>
        <Link href="/todos" className="mr-4 underline">
          Todos
        </Link>
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  )
}
