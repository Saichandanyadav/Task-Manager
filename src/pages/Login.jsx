import { useState } from "react"
import { getData, setData } from "../utils/LocalStore"

function Login({ setUser, onClose }) {
  const [name, setName] = useState("")
  const [role, setRole] = useState("user")

  const handleLogin = () => {
    if (!name) return

    if (role === "user") {
      const existing = getData("users") || ["Surya", "Nikhil", "Harsha"]
      if (!existing.includes(name)) {
        setData("users", [...existing, name])
      }
    }

    const userData = { name, role }
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80 relative">
        <button className="absolute top-3 right-3" onClick={onClose}>✕</button>

        <h2 className="text-center font-bold mb-5">Login</h2>

        <input
          className="border w-full p-2 mb-4 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border w-full p-2 mb-4 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          className="bg-blue-500 text-white w-full p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
