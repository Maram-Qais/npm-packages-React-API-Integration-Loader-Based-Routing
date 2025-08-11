import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">

      <h1 className="text-3xl font-bold text-white">{details.name}</h1>

      <section>
        <h3 className="text-lg font-semibold text-gray-300 mb-1">Description</h3>
        <div className="p-4 bg-gray-800 rounded text-gray-200">
          {details.description || "No description provided."}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-300 mb-1">License</h3>
        <div className="p-4 bg-gray-800 rounded text-gray-200">
          {details.license || "No license specified."}
        </div>
      </section>

  
      <section>
        <h3 className="text-lg font-semibold text-gray-300 mb-1">Author</h3>
        <div className="p-4 bg-gray-800 rounded text-gray-200">
          {details.author?.name || "Unknown author"}
        </div>
      </section>
    </div>
  );
}
