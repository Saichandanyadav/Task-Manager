import { useState } from "react"
import AdminPage from "./pages/AdminPage"
import UserPage from "./pages/UserPage"
import Login from "./pages/Login"
import TopBar from "./components/TopBar"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar user={user} onSwitch={() => setShowLogin(true)} />

      {showLogin && <Login setUser={setUser} onClose={() => setShowLogin(false)} />}

      {!user && <p className="text-center mt-20 text-gray-500">Please login</p>}

      {user?.role === "admin" && <AdminPage />}
      {user?.role === "user" && <UserPage user={user} />}
    </div>
  )
}

export default App
