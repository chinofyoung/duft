import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import { Image } from "antd";
import { db } from "../firebase";

export default function ExpensesPayables({ expense }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    onSnapshot(doc(db, "users", expense.uid), (snapshot) => {
      setUser(snapshot.data() || {});
    });
  }, [user.uid]);

  return (
    <li className="flex flex-col gap-2 bg-slate-100 p-2 pr-4 rounded-md">
      <Disclosure>
        <Disclosure.Button>
          <div className="flex items-center py-2 pl-2 gap-1">
            <span className="text-sm font-bold text-left">
              {expense.name.substring(0, 25)}
              {expense.name.length > 24 && "..."}
            </span>
            <span className="text-xs">
              / ₱{expense.cost.toLocaleString("en-US")}
            </span>
            <AiOutlineRight className="ml-auto text-base ui-open:rotate-90 ui-open:transform" />
          </div>
        </Disclosure.Button>
        <Disclosure.Panel>
          <div className="grid grid-cols-2 gap-2 p-2 border-t border-solid">
            <div className="w-[120px] h-[120px] rounded-lg overflow-hidden border-2 border-slate-300">
              <Image
                src={
                  expense.image ? expense.image : "https://placehold.co/120x120"
                }
                alt="Expense Photo"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <strong>Description:</strong>
                {expense.description}
              </div>
              <div className="flex flex-col">
                <strong>Cost:</strong>₱{expense.cost.toLocaleString("en-US")}
              </div>
              <div className="flex flex-col">
                <strong>Reference #</strong>
                <span>
                  {expense.reference ? expense.reference : "Not available"}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <strong>Date submitted:</strong>
              <span>
                {new Date(
                  expense?.createdAt?.seconds * 1000
                ).toLocaleDateString("en-US")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src={user.photoURL} />
              <span className="font-bold">{user.displayName}</span>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </li>
  );
}
