"use client";

import { useParams } from "next/navigation";
import { useState } from "react";


export default function ProjectDetail() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = {
        title: newTask,
        createdAt: new Date().toLocaleDateString(),
        status: "Not Started",
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const updateTaskStatus = (index, status) => {
    const updated = [...tasks];
    updated[index].status = status;
    setTasks(updated);
  };

  return (
    <div className="p-6 ml-[18%]">
      <h1 className="text-2xl font-bold mb-4">Project #{id}</h1>

      {/* Task Creation */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Add Task</h2>
        <div className="flex gap-2 mt-2">   
          <input
            type="text"
            placeholder="Enter new task"
            className="border rounded px-3 py-2 w-full"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* Task List */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks added yet.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task, i) => (
              <li
                key={i}
                className="p-4 border rounded shadow flex flex-col gap-1"
              >
                <div className="font-medium">{task.title}</div>
                <div className="text-sm text-gray-500">
                  Created on: {task.createdAt}
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <label className="text-sm">Status:</label>
                  <select
                    value={task.status}
                    onChange={(e) =>
                      updateTaskStatus(i, e.target.value)
                    }
                    className="border px-2 py-1 rounded text-sm"
                  >
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
