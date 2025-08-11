import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="min-h-screen  bg-gray-900  text-white"> 

      <Header />
      
      <Outlet />

      
    </div>
  );
}
