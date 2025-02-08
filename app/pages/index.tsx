import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <Link href="/todos">View Todos</Link>
    </div>
  )
}
