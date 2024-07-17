const MoneySend = () => {
  return (
    <div>
      <div>
      <div className="p-[10px] bg-slate-300 text-center text-3xl rounded-lg mb-[20px]">
            <h2>Total Balance : 50</h2>
        </div>
        <div className="grid grid-cols-2 gap-[20px] text-center">
          <div className="bg-white p-[50px] rounded-lg cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <h2 className="text-2xl font-[700]">Send Money</h2>
          </div>
          <div className="bg-white p-[50px] rounded-lg cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <h2 className="text-2xl font-[700]">CashOut</h2>
          </div>
          <div className="bg-white p-[50px] rounded-lg cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <h2 className="text-2xl font-[700]">Cash In</h2>
          </div>
          <div className="bg-white p-[50px] rounded-lg cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
            <h2 className="text-2xl font-[700]">Balance Inquiry</h2>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default MoneySend;
