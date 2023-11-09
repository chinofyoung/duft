import React, { useContext } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { PayablesContext } from "../../context/payables-context";
import { ExpensesContext } from "../../context/expenses-context";

export default function Payables() {
  const { payables } = useContext(PayablesContext);
  const { pending } = useContext(ExpensesContext);

  function renderTotal() {
    const payablesLength = parseInt(payables.length);
    const expensesLength = parseInt(payables.length);
    let totalPayables = 0;
    let totalExpenses = 0;

    for (let i = 0; i < payablesLength; i++) {
      totalPayables = parseInt(payables[i]?.cost) + totalPayables;
    }
    for (let i = 0; i < expensesLength; i++) {
      totalExpenses = parseInt(pending[i]?.cost) + totalExpenses;
    }
    let total = totalExpenses + totalPayables;
    return total.toLocaleString("en-US");
  }

  return (
    <span className="flex w-full flex-col justify-between bg-slate-50 p-2 rounded-md">
      {/* inutang pwede mag add hin utang*/}
      <span className="flex flex-col">
        Payables: <strong className="text-lg">₱{renderTotal()}</strong>
      </span>
      <Link
        className="underline w-full flex items-center gap-1"
        href="/payables"
      >
        <span className="">See Payables</span> <BsArrowRight />
      </Link>
    </span>
  );
}
