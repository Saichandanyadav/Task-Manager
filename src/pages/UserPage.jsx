import { useState } from "react"
import { getData, setData } from "../utils/LocalStore"
import TaskCard from "../components/TaskCard"

function UserPage({ user }) {
  const [tasks, setTasks] = useState(getData("tasks") || [])

  const completeTask = (id) => {
    const updated = tasks.map(t => t.id === id ? { ...t, completed: true } : t)
    setTasks(updated)
    setData("tasks", updated)
  }

  const myTasks = tasks.filter(t => t.assignedTo === user.name)

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>

      {myTasks.length === 0 && (
        <p className="text-gray-500">No tasks assigned</p>
      )}

      {myTasks.map(task => (
        <TaskCard key={task.id} task={task} onComplete={completeTask} />
      ))}
    </div>
  )
}

export default UserPage
