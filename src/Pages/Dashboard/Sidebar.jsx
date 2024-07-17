import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
      <div className={`fixed inset-0 z-30 lg:relative lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 bg-white shadow-lg w-64 lg:w-64`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
            <button className="lg:hidden p-2" onClick={toggleSidebar}>
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="mt-6 flex-1">
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Home</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Profile</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Settings</a>
          </nav>
          <div className="mt-auto">
            <button onClick={logout} className="bg-blue-500 text-white w-full py-2 rounded">Log Out</button>
          </div>
        </div>
      </div>
    );
  };

  export default Sidebar