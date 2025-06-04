import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import useTaskData from "./hooks/useTaskData";
import Header from "./components/dashboard/Header";
import TaskPopup from "./components/dashboard/TaskPopup";
import TaskList from "./components/dashboard/TaskList";

export default function Dashboard() {
  const [user, loadingUser] = useAuthState(auth);
  const [taskLists, setTaskLists] = useTaskData(user);
  const [showPopup, setShowPopup] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [selectedList, setSelectedList] = useState(0);
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/id/${randomId}/info`)
      .then(res => res.json())
      .then(data => setProfileUrl(data.download_url))
      .catch(err => console.error("Profile fetch error:", err));
  }, []);

  const toggleComplete = (listIdx, taskIdx) => {
    const updated = [...taskLists];
    updated[listIdx].tasks[taskIdx].completed = !updated[listIdx].tasks[taskIdx].completed;
    updated[listIdx].tasks.sort((a, b) => a.completed - b.completed);
    setTaskLists(updated);
  };

  const handleAddTask = () => {
    if (!taskText.trim()) return;
    const updated = [...taskLists];
    updated[selectedList].tasks.push({ text: taskText, date: taskDate, completed: false });
    updated[selectedList].tasks.sort((a, b) => a.completed - b.completed);
    setTaskLists(updated);
    setShowPopup(false);
    setTaskText("");
    setTaskDate("");
  };

  const handleDeleteTask = (listIdx, taskIdx) => {
    const updated = [...taskLists];
    updated[listIdx].tasks.splice(taskIdx, 1);
    setTaskLists(updated);
  };

  const handleAddList = () => {
    const name = prompt("Enter new list name:");
    if (!name) return;
    setTaskLists([...taskLists, { name, tasks: [] }]);
  };

  const handleDeleteList = (listIdx) => {
    if (!window.confirm("Delete this task list?")) return;
    const updated = [...taskLists];
    updated.splice(listIdx, 1);
    setTaskLists(updated);
    if (selectedList === listIdx) setSelectedList(0);
  };

  if (loadingUser) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <Header profileUrl={profileUrl} />

      <main className="p-6 flex gap-6 overflow-x-auto">
        {taskLists.map((list, idx) => (
          <TaskList
            key={idx}
            list={list}
            listIdx={idx}
            onDeleteList={handleDeleteList}
            onAddTaskClick={(i) => { setSelectedList(i); setShowPopup(true); }}
            onToggleComplete={toggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </main>

      <button
        onClick={handleAddList}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
      >
        + New Task List
      </button>

      {showPopup && (
        <TaskPopup
          taskText={taskText}
          setTaskText={setTaskText}
          taskDate={taskDate}
          setTaskDate={setTaskDate}
          onAddTask={handleAddTask}
        />
      )}

      <div className="fixed bottom-6 left-6">
        <button onClick={() => signOut(auth)} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}
