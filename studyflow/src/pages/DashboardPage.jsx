
import { Link } from "react-router-dom";
import { useStudy } from "../context/StudyContext";
import StatCard from "../components/StatCard";
import TaskList from "../components/TaskList";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DashboardPage() {
  useDocumentTitle("Dashboard");

  const { tasks, toggleTask, deleteTask, updateTask, settings } = useStudy();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const recentTasks = tasks.slice(-3).reverse();

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-[#743d45] p-8 text-white">
        <p className="text-sm text-white/80">Welcome back,</p>
        <h2 className="mt-2 text-3xl font-bold">
          {settings.username || "Student"}!
        </h2>
        <p className="mt-3 max-w-xl text-white/80">
          Every small step brings you closer to your goals.
          Plan your tasks and make today productive.
        </p>

        <Link
          to="/tasks"
          className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-[#743d45] hover:bg-gray-100"
        >
          Manage My Tasks
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Your Overview</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Tasks"
            value={totalTasks}
            description="All your study tasks"
            icon="📚"
          />

          <StatCard
            title="Completed"
            value={completedTasks}
            description="Tasks you have finished"
            icon="✅"
          />

          <StatCard
            title="Pending"
            value={pendingTasks}
            description="Tasks still to complete"
            icon="⏳"
          />
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Study Progress</h2>
            <p className="mt-1 text-sm text-gray-500">
              Your overall task completion
            </p>
          </div>
          <span className="text-2xl font-bold text-[#743d45]">
            {progress}%
          </span>
        </div>

        <div className="mt-5 h-4 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#743d45] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent Tasks</h2>
          <Link
            to="/tasks"
            className="text-sm font-semibold text-[#743d45] hover:underline"
          >
            View all
          </Link>
        </div>

        <TaskList
          tasks={recentTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </section>
    </div>
  );
}

export default DashboardPage;
