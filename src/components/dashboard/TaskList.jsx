import TaskCard from "./TaskCard";

export default function TaskList({
  list,
  listIdx,
  onDeleteList,
  onAddTaskClick,
  onToggleComplete,
  onDeleteTask
}) {
  return (
    <div className="border p-4 w-64 flex-shrink-0 bg-white shadow rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">{list.name}</h2>
        <button className="text-red-500 text-sm" onClick={() => onDeleteList(listIdx)}>Delete</button>
      </div>

      <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => onAddTaskClick(listIdx)}>
        <div className="bg-[#194A8D] text-white rounded-full p-2 text-xl">+</div>
        <span>Add a task</span>
      </div>

      {list.tasks.map((task, taskIdx) => (
        <TaskCard
          key={taskIdx}
          task={task}
          onToggle={() => onToggleComplete(listIdx, taskIdx)}
          onDelete={() => onDeleteTask(listIdx, taskIdx)}
        />
      ))}
    </div>
  );
}
