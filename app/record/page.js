"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import RecordSales from "./record-sales";
import RecordExpense from "./record-expense";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import { SalesContextProvider } from "../context/sales-context";
import { ItemsContextProvider } from "../context/items-context";

export default function Page() {
  return (
    <Padded>
      <MainHeading>Record</MainHeading>
      <Tab.Group>
        <Tab.List className="grid grid-cols-2 my-4">
          <Tab as="div">
            {({ selected }) => (
              <button
                className={`${
                  selected ? "bg-slate-600 text-white" : "bg-slate-200"
                }  w-full py-2 rounded-l-lg`}
              >
                Sales
              </button>
            )}
          </Tab>
          <Tab as="div">
            {({ selected }) => (
              <button
                className={`${
                  selected ? "bg-slate-600 text-white" : "bg-slate-200"
                }  w-full py-2 rounded-r-lg`}
              >
                Expenses
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ItemsContextProvider>
              <SalesContextProvider>
                <RecordSales />
              </SalesContextProvider>
            </ItemsContextProvider>
          </Tab.Panel>
          <Tab.Panel>
            <RecordExpense />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Padded>
  );
}
