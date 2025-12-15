function TopBar({ user, onSwitch }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
      <h1 className="font-bold text-lg">Task Manager</h1>

      <div className="flex items-center gap-4">
        {user && (
          <span className="bg-slate-600 px-3 py-1 rounded-full text-sm">
            {user.name} · {user.role}
          </span>
        )}

        <button
          className="bg-blue-500 px-4 py-1 rounded"
          onClick={onSwitch}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default TopBar
