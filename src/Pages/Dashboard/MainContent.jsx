import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
      <main className="flex-1 p-6">
        <div className="p-[10px] bg-slate-300 text-center text-3xl rounded-lg mb-[20px]">
            <h2>Total Balance : 50</h2>
        </div>
        <Outlet></Outlet>
      </main>
    );
  };

  export default MainContent