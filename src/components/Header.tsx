import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 h-14 bg-gray-900 border-b border-gray-800">
      <div className="flex items-center space-x-2 text-sm">
        <Link 
  to="/" 
  className="font-bold text-white hover:text-blue-400 transition-colors text-base sm:text-lg"
>
  NPM Registry
</Link>

      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </header>
  );
}
