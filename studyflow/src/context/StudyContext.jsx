
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const StudyContext = createContext();

export function StudyProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("studyflow-tasks", [
    {
      id: 1,
      title: "Complete React assignment",
      subject: "Software Engineering",
      date: "2026-11-23",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Review JavaScript concepts",
      subject: "Web Development",
      date: "2026-11-24",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Read study notes",
      subject: "Academic Writing",
      date: "2026-11-25",
      priority: "Low",
      completed: true,
    },
  ]);

  const [settings, setSettings] = useLocalStorage("studyflow-settings", {
    username: "Student",
    dailyGoal: 4,
    notifications: true,
    darkMode: false,
  });

  function addTask(task) {
    const newTask = {
      ...task,
      id: Date.now(),
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function updateTask(id, updatedTask) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  }

  return (
    <StudyContext.Provider
      value={{
        tasks,
        settings,
        setSettings,
        addTask,
        deleteTask,
        toggleTask,
        updateTask,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}
