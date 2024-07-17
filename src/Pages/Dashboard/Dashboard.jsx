import { useState } from "react";
import MainContent from "./MainContent";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-30 lg:relative lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 bg-white shadow-lg w-64 lg:w-64`}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
        <button className="lg:hidden mt-4 p-2 bg-gray-200 rounded" onClick={toggleSidebar}>
          Close
        </button>
      </div>
      <nav className="mt-6">
        <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700" to="">Approve User</Link> 
        <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700" to="payment">All Payment</Link>
      </nav>
    </div>
  );
};

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <button className="lg:hidden p-2 bg-gray-200 rounded" onClick={toggleSidebar}>
        Menu
      </button>
      <h1 className="text-2xl font-semibold text-gray-700">Welcome, User!</h1>
      <div className="flex items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log Out</button>
      </div>
    </header>
  );
};