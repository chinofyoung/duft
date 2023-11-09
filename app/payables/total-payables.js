import React, { useContext } from "react";
import { PayablesContext } from "../context/payables-context";
import { ExpensesContext } from "../context/expenses-context";
import Card from "../layout/card";
import SubHeading from "../layout/sub-heading";

export default function TotalPayables() {
  const { payables } = useContext(PayablesContext);
  const { pending } = useContext(ExpensesContext);

  function renderTotal() {
    const payablesLength = parseInt(payables.length);
    const expensesLength = parseInt(pending.length);
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
    <Card>
      <SubHeading>Summary</SubHeading>
      <span className="text-sm">
        Total Payables: <strong>₱{renderTotal()}</strong>
      </span>
    </Card>
  );
}
