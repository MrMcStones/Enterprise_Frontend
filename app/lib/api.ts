export const getTodos = async () => {
  const response = await fetch("http://localhost:8080/api/todos")
  return response.json()
}

export const deleteTodo = async (id: number) => {
  await fetch(`http://localhost:8080/api/todos/${id}`, { method: "DELETE" })
}

export const updateTodo = async (id: number, data: any) => {
  const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  return response.json()
}
