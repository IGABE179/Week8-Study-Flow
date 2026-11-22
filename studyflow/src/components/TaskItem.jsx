
import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  function saveEdit() {
    if (!editTitle.trim()) {
      return;
    }

    onUpdate(task.id, { title: editTitle.trim() });
    setIsEditing(false);
  }

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mt-1 h-5 w-5 accent-[#743d45]"
        />

        <div className="min-w-0">
          {isEditing ? (
            <div className="flex flex-wrap gap-2">
              <input
                value={editTitle}
                onChange={(event) => setEditTitle(event.target.value)}
                className="rounded border border-gray-300 p-2"
              />
              <button
                onClick={saveEdit}
                className="rounded bg-[#743d45] px-3 py-2 text-white"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="rounded bg-gray-200 px-3 py-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <h3
              className={`font-semibold ${
                task.completed
                  ? "text-gray-400 line-through"
                  : "text-gray-800"
              }`}
            >
              {task.title}
            </h3>
          )}

          <p className="mt-1 text-sm text-gray-500">
            {task.subject} · Due: {task.date}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

        <button
          onClick={() => setIsEditing(true)}
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
