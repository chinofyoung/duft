import React, { useContext } from "react";
import { SalesContext } from "../../context/sales-context";
import { ExpensesContext } from "../../context/expenses-context";

export default function Earnings() {
  const { paid } = useContext(SalesContext);
  const { approved } = useContext(ExpensesContext);

  function renderTotal() {
    const salesLength = parseInt(paid.length);
    const expensesLength = parseInt(approved.length);
    let totalSales = 0;
    let totalCost = 0;
    let totalExpenses = 0;

    for (let i = 0; i < salesLength; i++) {
      totalSales = parseInt(paid[i]?.totalPrice) + totalSales;
      totalCost = parseInt(paid[i]?.cost) + totalCost;
    }
    for (let i = 0; i < expensesLength; i++) {
      totalExpenses = parseInt(approved[i]?.cost) + totalExpenses;
    }
    let total = totalSales - (totalExpenses + totalCost);
    return total.toLocaleString("en-US");
  }

  return (
    <span className="flex flex-col bg-slate-50 p-2 rounded-md">
      {/* sales - cost of sales - expenses */}
      Retained Earnings: <strong className="text-lg">₱{renderTotal()}</strong>
    </span>
  );
}
