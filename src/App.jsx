import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" bg-gray-200 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-24">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
