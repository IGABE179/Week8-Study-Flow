
import Navbar from "../components/Navbar";
import { useStudy } from "../context/StudyContext";

function SiteLayout({ children }) {
  const { settings } = useStudy();

  return (
    <div
      className={`min-h-screen ${
        settings.darkMode
          ? "bg-[#241f20] text-white"
          : "bg-[#f8f5f1] text-[#352b28]"
      }`}
    >
      <header className="bg-white px-5 py-5 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#743d45]">
              StudyFlow
            </h1>
            <p className="text-xs text-gray-500">
              Plan your work. Focus on your goals.
            </p>
          </div>

          <Navbar />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8">
        {children}
      </main>

      <footer className="mt-10 border-t border-gray-200 px-5 py-6 text-center text-sm text-gray-500">
        © 2026 StudyFlow. Built to make studying easier.
      </footer>
    </div>
  );
}

export default SiteLayout;
