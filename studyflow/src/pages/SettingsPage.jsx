
import { useStudy } from "../context/StudyContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useToggle from "../hooks/useToggle";
import { useEffect } from "react";

function SettingsPage() {
  useDocumentTitle("Settings");

  const { settings, setSettings } = useStudy();

  const [notifications, toggleNotifications] = useToggle(
    settings.notifications
  );

  const [darkMode, toggleDarkMode] = useToggle(settings.darkMode);

  useEffect(() => {
    setSettings((current) => ({
      ...current,
      notifications,
      darkMode,
    }));
  }, [notifications, darkMode, setSettings]);

  function updateName(event) {
    setSettings((current) => ({
      ...current,
      username: event.target.value,
    }));
  }

  function updateGoal(event) {
    setSettings((current) => ({
      ...current,
      dailyGoal: Number(event.target.value),
    }));
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <section>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-gray-500">
          Personalize your StudyFlow experience.
        </p>
      </section>

      <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-bold">Profile</h2>
          <p className="mt-1 text-sm text-gray-500">
            Choose the name displayed on your dashboard.
          </p>

          <label className="mb-2 mt-4 block text-sm font-medium">
            Your name
          </label>

          <input
            type="text"
            value={settings.username}
            onChange={updateName}
            className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          />
        </div>

        <hr />

        <div>
          <h2 className="text-xl font-bold">Daily Study Goal</h2>
          <p className="mt-1 text-sm text-gray-500">
            Set how many hours you want to study each day.
          </p>

          <input
            type="number"
            min="1"
            max="12"
            value={settings.dailyGoal}
            onChange={updateGoal}
            className="mt-4 w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-[#743d45]"
          />
        </div>

        <hr />

        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-bold">Notifications</h2>
            <p className="text-sm text-gray-500">
              Enable or disable study reminders.
            </p>
          </div>

          <button
            onClick={toggleNotifications}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              notifications
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {notifications ? "On" : "Off"}
          </button>
        </div>

        <hr />

        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-bold">Dark Mode</h2>
            <p className="text-sm text-gray-500">
              Change the main page background.
            </p>
          </div>

          <button
            onClick={toggleDarkMode}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              darkMode
                ? "bg-[#743d45] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {darkMode ? "On" : "Off"}
          </button>
        </div>
      </section>

      <p className="text-center text-sm text-green-700">
        Your settings are saved automatically.
      </p>
    </div>
  );
}

export default SettingsPage;
