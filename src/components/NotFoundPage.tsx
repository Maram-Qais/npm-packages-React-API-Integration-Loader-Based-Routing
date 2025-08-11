import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
          <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-gray-900 text-white px-4 text-center">

      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you’re looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
      >
        Go Home
      </Link>
    </div>
  );
}
