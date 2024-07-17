import { useContext } from "react";
import { userContext } from "../../UserAuth/UserAuth";

const Header = ({ toggleSidebar }) => {
  const {users} = useContext(userContext);
  console.log(users)
    return (
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <button className="lg:hidden p-2" onClick={toggleSidebar}>
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-700">Welcome, {users?.data?.name}</h1>
      </header>
    );
  };

  export default Header