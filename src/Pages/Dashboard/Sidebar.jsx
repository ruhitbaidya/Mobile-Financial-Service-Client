import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../UserAuth/UserAuth";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { users } = useContext(userContext);
  console.log(users);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div
      className={`fixed inset-0 z-30 lg:relative lg:translate-x-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 bg-white shadow-lg w-64 lg:w-64`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[25px] font-semibold text-gray-700">{users?.data?.status} Dashboard</h2>
          <button className="lg:hidden p-2" onClick={toggleSidebar}>
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="mt-6 flex-1">
          {users?.data?.status === "admin" && (
            <>
              <Link to="adminaprove" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">All Users</Link>
              <Link to="payment" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">All Payment History</Link>
            </>
          )}
           {users?.data?.status === "agent" && (
            <>
              <Link to="money" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Payment History</Link>
              <Link to="payhistory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Transition</Link>
            </>
          )}
           {users?.data?.status === "user" && (
            <>
              <Link to="moneysend" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Money Transition</Link>
              <Link to="payhistory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-700">Payment History</Link>
            </>
          )}
         
        </nav>
        <div className="mt-auto">
          <button
            onClick={logout}
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
