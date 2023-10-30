"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import SubHeading from "../layout/sub-heading";
import FlexCol from "../layout/flex-col";
import RecordProduct from "./record-product";

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
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
