export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const getTodos = async (): Promise<Todo[]> => {
  const token = localStorage.getItem("token")
  const response = await fetch("http://localhost:8080/api/todos", {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!response.ok) throw new Error("Failed to fetch todos")
  return response.json()
}

export const createTodo = async (title: string): Promise<Todo> => {
  const token = localStorage.getItem("token")
  const response = await fetch("http://localhost:8080/api/todos", {
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
  await fetch(`http://localhost:8080/api/todos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const updateTodo = async (
  id: number,
  data: Partial<Todo>
): Promise<Todo> => {
  const token = localStorage.getItem("token")
  const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to update todo")
  return response.json()
}
