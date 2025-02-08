import Link from "next/link"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome to the Todo App</h1>
      <div className="mt-4">
        <Link
          href="/todos"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Todos
        </Link>
        <Link
          href="/login"
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  )
}
