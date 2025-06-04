export default function TaskPopup({ taskText, setTaskText, taskDate, setTaskDate, onAddTask }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded space-y-4 w-[300px]">
        <input
          className="border w-full p-2"
          placeholder="Enter Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          className="border w-full p-2"
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 w-full"
          onClick={onAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
