import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

export default function SearchInput() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if (term.trim() === "") return;
    navigate(`/search?term=${term}`);
     setTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <VscSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="pl-10 pr-3 py-2 w-full rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border border-gray-700"
          placeholder="Search packages"
        />
      </div>
    </form>
  );
}

