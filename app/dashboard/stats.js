export default function Stats() {
  return (
    <div className="gap-4 flex bg-slate-300 p-4 flex-col">
      <div className="flex gap-2 text-xs mt-2">
        <a
          href=""
          className="text-white bg-slate-400 px-4 py-1 flex items-center rounded-md"
        >
          Day
        </a>
        <a
          href=""
          className="text-white bg-slate-600 px-4 py-1 flex items-center rounded-md font-bold"
        >
          Month
        </a>
        <a
          href=""
          className="text-white bg-slate-400 px-4 py-1 flex items-center rounded-md"
        >
          Year
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-lime-600 rounded-md p-4 shadow-sm">
          <h3 className="text-lg text-white">Sales</h3>
          <div className="flex flex-col text-white">
            <span className="text-xs">
              Gross Sales: <strong>23,240</strong>
            </span>
            <span className="text-xs">
              Bottles Sold: <strong>87</strong>
            </span>
            <span className="text-xs">
              Net Profit: <strong>15,240</strong>
            </span>
          </div>
        </div>
        <div className="bg-red-500 rounded-md p-4 shadow-sm">
          <h3 className="text-lg text-white">Expenses</h3>
          <div className="flex flex-col text-white">
            <span className="text-xs">
              Total Expenses: <strong>13,240</strong>
            </span>
          </div>
        </div>
        <div className="bg-cyan-500 rounded-md p-4 shadow-sm">
          <h3 className="text-lg text-white">Inventory</h3>
          <div className="flex flex-col text-white">
            <span className="text-xs">
              Men: <strong>395</strong>
            </span>
            <span className="text-xs">
              Women: <strong>298</strong>
            </span>
          </div>
        </div>
        <div className="bg-teal-500 rounded-md p-4 shadow-sm">
          <h3 className="text-lg text-white">Receivables</h3>
          <div className="flex flex-col text-white">
            <span className="text-xs">
              Total: <strong>16,430</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
