import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Card from "../layout/card";
import FlexCol from "../layout/flex-col";
import SubHeading from "../layout/sub-heading";
import Inventory from "./permanent/inventory";
import Payables from "./permanent/payables";
import Earnings from "./permanent/earnings";
import Capital from "./permanent/capital";
import Receivables from "./permanent/receivable";
import Cash from "./permanent/cash";
import { PayablesContextProvider } from "../context/payables-context";
import { ExpensesContextProvider } from "../context/expenses-context";
import { SalesContextProvider } from "../context/sales-context";

export default function PermanentStats() {
  return (
    <ExpensesContextProvider>
      <PayablesContextProvider>
        <SalesContextProvider>
          <div className="bg-slate-200 p-4">
            <FlexCol>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Cash />
                <Receivables />
                <Capital />
                <Earnings />
                <Payables />
                <Inventory />
              </div>
            </FlexCol>
          </div>
        </SalesContextProvider>
      </PayablesContextProvider>
    </ExpensesContextProvider>
  );
}
