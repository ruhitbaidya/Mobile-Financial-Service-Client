import Card from "./Card";

const MainContent = () => {
    return (
      <main className="flex-1 p-6">
        <div className="p-[10px] bg-slate-300 text-center text-3xl rounded-lg mb-[20px]">
            <h2>Total Balance : 50</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Sales" value="$10,000" />
          <Card title="Users" value="1,200" />
          <Card title="Orders" value="320" />
        </div>
      </main>
    );
  };

  export default MainContent