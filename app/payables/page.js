"use client";
import React from "react";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import SubHeading from "../layout/sub-heading";
import FlexCol from "../layout/flex-col";
import Card from "../layout/card";
import AddPayable from "./add-payable";
import { PayablesContextProvider } from "../context/payables-context";
import { ExpensesContextProvider } from "../context/expenses-context";

export default function Page() {
  return (
    <PayablesContextProvider>
      <ExpensesContextProvider>
        <Padded>
          <FlexCol>
            <MainHeading>Payables</MainHeading>
            <Card>
              <SubHeading>Summary</SubHeading>
              <span className="text-sm">Total Payables:</span>
            </Card>
            <AddPayable />
          </FlexCol>
        </Padded>
      </ExpensesContextProvider>
    </PayablesContextProvider>
  );
}
