"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/check", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) setIsAuthenticated(true)
      else router.push("/login")
    })
  }, [])

  if (!isAuthenticated) return <p>Loading...</p>

  return <>{children}</>
}
