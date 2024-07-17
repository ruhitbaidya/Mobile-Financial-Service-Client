import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
      <main className="flex-1 p-6">
        <Outlet></Outlet>
      </main>
    );
  };

  export default MainContent