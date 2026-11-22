
import { useState } from "react";
import { useStudy } from "../context/StudyContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import useDebounce from "../hooks/useDebounce";
import useDocumentTitle from "../hooks/useDocumentTitle";

function TasksPage() {
  useDocumentTitle("My Tasks");

  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
  } = useStudy();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  const debouncedSearch = useDebounce(search);

  let filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      task.subject.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  if (sort === "Newest") {
    filteredTasks = [...filteredTasks].sort((a, b) => b.id - a.id);
  } else if (sort === "Oldest") {
    filteredTasks = [...filteredTasks].sort((a, b) => a.id - b.id);
  } else if (sort === "Due date") {
    filteredTasks = [...filteredTasks].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">My Tasks</h1>
        <p className="mt-2 text-gray-500">
          Organize your work and keep track of your progress.
        </p>
      </section>

      <TaskForm onAddTask={addTask} />

      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold">Find your tasks</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tasks or subjects..."
            className="rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          />

          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Due date</option>
          </select>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Your Task List</h2>
          <span className="text-sm text-gray-500">
            {filteredTasks.length} task(s)
          </span>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </section>
    </div>
  );
}

export default TasksPage;
