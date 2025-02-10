export interface Todo {
  id: number
  title: string
  completed: boolean
}

const API_URL = "http://localhost:8080/api"

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
  if (!response.ok) throw new Error("Login failed")
  const data = await response.json()
  localStorage.setItem("token", data.token)
  return data.token
}

export const getTodos = async (): Promise<Todo[]> => {
  const token = localStorage.getItem("token")
  if (!token) throw new Error("Not authenticated")
  const response = await fetch(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!response.ok) throw new Error("Failed to fetch todos")
  return response.json()
}

export const createTodo = async (title: string): Promise<Todo> => {
  const token = localStorage.getItem("token")
  if (!token) throw new Error("Not authenticated")
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, completed: false }),
  })
  if (!response.ok) throw new Error("Failed to create todo")
  return response.json()
}

export const deleteTodo = async (id: number): Promise<void> => {
  const token = localStorage.getItem("token")
  if (!token) throw new Error("Not authenticated")
  await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  })
}
