"use client";
import React from "react";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import FlexCol from "../layout/flex-col";
import AddPayable from "./add-payable";
import TotalPayables from "./total-payables";
import { PayablesContextProvider } from "../context/payables-context";
import { ExpensesContextProvider } from "../context/expenses-context";

export default function Page() {
  return (
    <PayablesContextProvider>
      <ExpensesContextProvider>
        <Padded>
          <FlexCol>
            <MainHeading>Payables</MainHeading>
            <TotalPayables />
            <AddPayable />
          </FlexCol>
        </Padded>
      </ExpensesContextProvider>
    </PayablesContextProvider>
  );
}
