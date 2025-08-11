import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  // Slice results for current page
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers for pagination
  const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-white">Search results</h1>

      <div className="space-y-4 mt-4">
        {paginatedResults.length > 0 ? (
          paginatedResults.map((result) => (
            <PackageListItem pack={result} key={result.name} />
          ))
        ) : (
          <p className="text-gray-400">No packages found.</p>
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold transition`}
          >
            Prev
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold transition`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
