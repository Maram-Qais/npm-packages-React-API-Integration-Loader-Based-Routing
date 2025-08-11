import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";
import { FiPackage } from "react-icons/fi";

interface PackageListItemProps {
  pack: PackageSummary;
}

function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword) => (
    <span
      key={keyword}
      className="bg-gray-800 text-gray-200 px-2 py-0.5 rounded-full text-xs"
    >
      {keyword}
    </span>
  ));

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow hover:shadow-lg transition">
      <div className="flex flex-col gap-2">
        <Link
          to={`/packages/${pack.name}`}
          className="text-xl font-bold text-white hover:text-blue-400 transition"
        >
          {pack.name}
        </Link>
        <p className="text-sm text-gray-400">{pack.description}</p>
        <div className="flex flex-wrap gap-1">{renderedKeywords}</div>
      </div>
      <Link
        to={`/packages/${pack.name}`}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md px-3 py-1.5 transition"
      >
        <FiPackage className="text-base" />
        View
      </Link>
    </div>
  );
}

export default PackageListItem;
