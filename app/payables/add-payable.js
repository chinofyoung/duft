"use client";
import React, { useState, useEffect, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import Card from "../layout/card";
import FlexCol from "../layout/flex-col";
import SubHeading from "../layout/sub-heading";
import Confirmation from "../components/confirmation";
import Payables from "./payables";
import ExpensesPayables from "./expenses-payables";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import { UserAuth } from "../context/auth-context";
import { PayablesContext } from "../context/payables-context";
import { ExpensesContext } from "../context/expenses-context";

export default function AddPayable() {
  const { user } = UserAuth();
  const { payables } = useContext(PayablesContext);
  const { pending } = useContext(ExpensesContext);
  const [isOpen, setIsOpen] = useState(false);
  const [newPayable, setNewPayable] = useState({
    name: "",
    cost: "",
    source: "",
  });

  // add payable to database
  const addPayable = async (e) => {
    e.preventDefault();
    if (user && newPayable.name !== "" && newPayable.cost !== "") {
      setIsOpen(true);
      await addDoc(collection(db, "payables"), {
        name: newPayable.name.trim(),
        cost: newPayable.cost,
        source: newPayable.source,
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
      setNewPayable({ name: "", cost: "", source: "" });
    }
  };

  if (!user) {
    return (
      <Padded>
        <FlexCol>
          <MainHeading>Record</MainHeading>
          <SubHeading>Access Denied. Please Login</SubHeading>
        </FlexCol>
      </Padded>
    );
  }

  return (
    <FlexCol>
      <Card>
        <Confirmation
          openDialog={isOpen}
          onClose={() => setIsOpen(false)}
          heading="Product Added!"
          message="Product has successfully been added!"
        />
        <Disclosure>
          <FlexCol>
            <Disclosure.Button className="flex justify-between items-center">
              <SubHeading>Add Payable</SubHeading>
              <AiOutlineRight className="ml-auto ui-open:rotate-90 ui-open:transform" />
            </Disclosure.Button>
            <Disclosure.Panel>
              <FlexCol>
                <input
                  value={newPayable.name}
                  onChange={(e) =>
                    setNewPayable({ ...newPayable, name: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="text"
                  placeholder="Name"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    value={newPayable.cost}
                    onChange={(e) =>
                      setNewPayable({ ...newPayable, cost: e.target.value })
                    }
                    className="text-sm border w-full px-5 py-2.5 rounded-md"
                    type="number"
                    placeholder="Price"
                  />
                  <input
                    value={newPayable.source}
                    onChange={(e) =>
                      setNewPayable({ ...newPayable, source: e.target.value })
                    }
                    className="text-sm border w-full px-5 py-2.5 rounded-md"
                    type="text"
                    placeholder="Source"
                  />
                </div>
                <button
                  onClick={addPayable}
                  className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-red-500"
                >
                  Add
                </button>
              </FlexCol>
            </Disclosure.Panel>
          </FlexCol>
        </Disclosure>
      </Card>
      <Card>
        <h3>Others</h3>
        <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
          {!payables
            ? "loading"
            : payables.map((payable, index) => {
                return <Payables payable={payable} key={`payables-${index}`} />;
              })}
        </ul>
      </Card>

      <Card>
        <h3>Expenses</h3>
        <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
          {!pending
            ? "loading"
            : pending.map((expense, index) => {
                return (
                  <ExpensesPayables
                    expense={expense}
                    key={`expenses-${index}`}
                  />
                );
              })}
        </ul>
      </Card>
    </FlexCol>
  );
}
