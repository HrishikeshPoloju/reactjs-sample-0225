export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-start justify-between gap-2 mb-2">
      <div className="flex items-start gap-2">
        <div
          onClick={onToggle}
          className={`w-5 h-5 mt-1 rounded-full border cursor-pointer ${task.completed ? 'bg-green-500' : ''}`}
        ></div>
        <div>
          <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>{task.text}</span>
          {task.date && (
            <div className="text-sm text-gray-500">{task.date}</div>
          )}
        </div>
      </div>
      <button onClick={onDelete} className="text-red-400 text-sm">✕</button>
    </div>
  );
}
