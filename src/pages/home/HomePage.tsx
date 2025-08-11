import { useLoaderData, Link } from "react-router-dom";
import type { HomeLoaderResult } from "./homeloader";
import { FiPackage } from "react-icons/fi";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  return (
    <div className="min-h-screen bg-gray-900 pt-12 pb-8">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Featured NPM Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col justify-between bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-5 h-full"
            >
              <div>
                <h2 className="text-lg font-semibold text-white mb-2 text-center">
                  {pkg.name}
                </h2>
                <p className="text-sm text-gray-300 mb-3 text-center line-clamp-3">
                  {pkg.description || "No description available."}
                </p>
                <p className="text-xs text-gray-400 text-center">
                  {pkg.maintainers.length} Maintainer
                  {pkg.maintainers.length !== 1 ? "s" : ""}
                </p>
              </div>

              <Link
                to={`/packages/${pkg.name}`}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md py-1.5 px-3 transition-colors"
              >
                <FiPackage className="text-base" />
                View Package
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
