import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import "../src/App.css";
import { useState } from "react";
import MainPage from "./Components/MainPage";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {isSidebarOpen && <Sidebar />}
      <MainPage />
    </div>
  );
}

export default App;
