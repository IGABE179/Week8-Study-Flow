
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !subject.trim() || !date) {
      setError("Please fill in all the fields.");
      return;
    }

    onAddTask({
      title: title.trim(),
      subject: subject.trim(),
      date,
      priority,
    });

    setTitle("");
    setSubject("");
    setDate("");
    setPriority("Medium");
    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm"
    >
      <h2 className="mb-5 text-xl font-bold">Add a new task</h2>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Task title
          </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="What do you need to do?"
            className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder="e.g. Mathematics"
            className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Due date
          </label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Priority
          </label>
          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 rounded-lg bg-[#743d45] px-6 py-3 font-semibold text-white hover:bg-[#5e3038]"
      >
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;
