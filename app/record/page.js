"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import RecordProduct from "./record-product";
import RecordExpense from "./record-expense";

export default function Page() {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-2">
        <Tab as="div">
          {({ selected }) => (
            <button
              className={`${
                selected ? "bg-slate-700 text-white" : "bg-slate-200"
              }  w-full p-4`}
            >
              Sales
            </button>
          )}
        </Tab>
        <Tab as="div">
          {({ selected }) => (
            <button
              className={`${
                selected ? "bg-slate-700 text-white" : "bg-slate-200"
              }  w-full p-4`}
            >
              Expenses
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <RecordProduct />
        </Tab.Panel>
        <Tab.Panel>
          <RecordExpense />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
