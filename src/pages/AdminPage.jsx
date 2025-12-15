import { useEffect, useState } from "react"
import { getData, setData } from "../utils/LocalStore"
import TaskCard from "../components/TaskCard"

function AdminPage() {
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState(getData("tasks") || [])
  const users = getData("users") || ["Surya", "Nikhil", "Harsha", "Shiva"]

  useEffect(() => {
    setData("tasks", tasks)
  }, [tasks])

  const addTask = () => {
    if (!title) return
    setTasks([...tasks, { id: Date.now(), title, assignedTo: null, completed: false }])
    setTitle("")
  }

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("taskId", id)
  }

  const onDrop = (e, user) => {
    const id = Number(e.dataTransfer.getData("taskId"))
    setTasks(tasks.map(t => t.id === id ? { ...t, assignedTo: user } : t))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex gap-3 mb-6">
        <input
          className="border p-3 flex-1 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button className="bg-blue-500 text-white px-6 rounded" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-3">Unassigned</h2>
          {tasks.filter(t => !t.assignedTo).map(task => (
            <TaskCard key={task.id} task={task} draggable onDragStart={onDragStart} />
          ))}
        </div>

        {users.map(user => (
          <div
            key={user}
            className="bg-gray-100 p-4 rounded"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, user)}
          >
            <h2 className="font-bold mb-3">{user}</h2>
            {tasks.filter(t => t.assignedTo === user).map(task => (
              <TaskCard key={task.id} task={task} draggable onDragStart={onDragStart} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPage
