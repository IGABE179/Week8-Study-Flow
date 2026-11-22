
import { useEffect, useRef, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useToggle from "../hooks/useToggle";

function FocusTimer({ mode }) {
  const studyTime = 25 * 60;
  const breakTime = 5 * 60;

  const [seconds, setSeconds] = useState(
    mode === "Study" ? studyTime : breakTime
  );

  const [isRunning, toggleRunning, setIsRunning] = useToggle(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((current) => current - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
    }
  }, [seconds, setIsRunning]);

  function resetTimer() {
    setIsRunning(false);
    setSeconds(mode === "Study" ? studyTime : breakTime);
  }

  function formatTime() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#743d45]">
        {mode} Session
      </p>

      <h2 className="my-8 text-6xl font-bold text-[#743d45] sm:text-7xl">
        {formatTime()}
      </h2>

      {seconds === 0 && (
        <p className="mb-4 font-semibold text-green-700">
          Session completed! Well done.
        </p>
      )}

      <div className="flex justify-center gap-3">
        <button
          onClick={toggleRunning}
          className="rounded-lg bg-[#743d45] px-6 py-3 font-semibold text-white hover:bg-[#5e3038]"
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={resetTimer}
          className="rounded-lg bg-gray-100 px-6 py-3 font-semibold hover:bg-gray-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function FocusPage() {
  useDocumentTitle("Focus Timer");

  const [mode, setMode] = useState("Study");

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold">Focus Time</h1>
        <p className="mt-2 text-gray-500">
          Take one task at a time. Give yourself time to focus and rest.
        </p>
      </section>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setMode("Study")}
          className={`rounded-lg px-5 py-3 font-semibold ${
            mode === "Study"
              ? "bg-[#743d45] text-white"
              : "bg-white text-gray-600"
          }`}
        >
          📖 Study · 25 min
        </button>

        <button
          onClick={() => setMode("Break")}
          className={`rounded-lg px-5 py-3 font-semibold ${
            mode === "Break"
              ? "bg-[#743d45] text-white"
              : "bg-white text-gray-600"
          }`}
        >
          ☕ Break · 5 min
        </button>
      </div>

      <FocusTimer key={mode} mode={mode} />

      <div className="rounded-2xl bg-[#f0e5e2] p-6 text-center">
        <h2 className="font-bold text-[#743d45]">A little reminder</h2>
        <p className="mt-2 text-sm text-[#743d45]">
          Stay focused during your study session and remember to take breaks.
          Progress comes from consistency.
        </p>
      </div>
    </div>
  );
}

export default FocusPage;
