import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold text-[#743d45]">
        404
      </h2>

      <p className="mt-3 text-gray-600">
        Sorry, this page does not exist.
      </p>

      <Link
        to="/"
        className="inline-block mt-5 bg-[#743d45] text-white px-6 py-3 rounded-lg"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;