
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

function NotFoundPage() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="py-20 text-center">
      <h1 className="text-7xl font-bold text-[#743d45]">404</h1>

      <h2 className="mt-5 text-2xl font-bold">
        Page not found
      </h2>

      <p className="mt-3 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-[#743d45] px-6 py-3 font-semibold text-white hover:bg-[#5e3038]"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;
