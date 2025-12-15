function TaskCard({ task, onComplete, draggable, onDragStart }) {
  return (
    <div
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition mb-3"
      draggable={draggable}
      onDragStart={(e) => onDragStart && onDragStart(e, task.id)}
    >
      <p className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.title}
      </p>

      {onComplete && !task.completed && (
        <button
          className="mt-3 text-sm bg-green-100 text-green-700 px-3 py-1 rounded"
          onClick={() => onComplete(task.id)}
        >
          Mark as Completed
        </button>
      )}
    </div>
  )
}

export default TaskCard
