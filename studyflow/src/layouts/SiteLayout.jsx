
import Navbar from "../components/Navbar";

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f5f1]">

      <header className="bg-white shadow-sm px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <h1 className="text-2xl font-bold text-[#743d45]">
            StudyFlow
          </h1>

          <Navbar />

        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">
        {children}
      </main>

    </div>
  );
}

export default SiteLayout;
