export const login = async (username: string, password: string) => {
  const response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) throw new Error("Invalid login")

  const { token } = await response.json()
  localStorage.setItem("token", token)
}

export const getToken = () => localStorage.getItem("token")

export const logout = () => {
  localStorage.removeItem("token")
}
