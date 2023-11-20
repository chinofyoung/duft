"use client";
import React from "react";
import RecordSales from "./record-sales";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import { SalesContextProvider } from "../context/sales-context";
import { ItemsContextProvider } from "../context/items-context";

export default function Page() {
  return (
    <Padded>
      <MainHeading>Request Stocks</MainHeading>
      <div className="mt-4"></div>
      <ItemsContextProvider>
        <SalesContextProvider>
          <RecordSales />
        </SalesContextProvider>
      </ItemsContextProvider>
    </Padded>
  );
}
