import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import {
  AiOutlineRight,
  AiFillCheckCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Image from "next/image";
import { UserAuth } from "../context/auth-context";

export default function Sales({ expense }) {
  const [expenseUser, setexpenseUser] = useState({});
  const { user } = UserAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    onSnapshot(doc(db, "users", expense.uid), (snapshot) => {
      setexpenseUser(snapshot.data() || {});
    });
  }, [expenseUser.uid]);

  // approve expense
  const approveExpense = async (id) => {
    await updateDoc(doc(db, "expenses", id), {
      approved: true,
    });
  };

  // reject expense
  const rejectExpense = async (id) => {
    await updateDoc(doc(db, "expenses", id), {
      approved: false,
    });
  };

  return (
    <li className="flex flex-col gap-2 bg-slate-100 p-2 pr-4 rounded-md">
      <Disclosure>
        <Disclosure.Button>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                className="object-cover"
                alt="Expense Photo"
                src={
                  expense.image ? expense.image : "https://placehold.co/96x96"
                }
                width={100}
                height={100}
              />
            </div>
            <span className="text-sm font-bold">{expense.name}</span>
            <AiOutlineRight className="ml-auto text-base ui-open:rotate-90 ui-open:transform" />
          </div>
        </Disclosure.Button>
        <Disclosure.Panel>
          <div className="grid grid-cols-2 gap-2 p-2 border-t border-solid">
            <div className="flex flex-col">
              <strong>Description:</strong>
              {expense.description}
            </div>
            <div className="flex flex-col">
              <strong>Cost:</strong>₱{expense.cost.toLocaleString("en-US")}
            </div>
            <div className="flex flex-col">
              <strong>Reference #</strong>
              <span>{expense.reference}</span>
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
              <img
                className="w-6 h-6 rounded-full"
                src={expenseUser.photoURL}
              />
              <span className="font-bold">{expenseUser.displayName}</span>
            </div>
            <div className="flex justify-between items-center col-span-2 border-t border-solid pt-2">
              <div className="flex flex-col">
                <strong>Status:</strong>
                <span>{expense.approved ? "approved" : "pending"}</span>
                {user.uid === "UXQ7tG2XoqTmrbks3eUOlkBhNo92" && (
                  <div className="flex gap-2 mt-2">
                    {expense.approved ? (
                      <button
                        onClick={() => rejectExpense(expense.id)}
                        className="bg-red-500 py-1 px-2 rounded-md text-white"
                      >
                        Reject
                      </button>
                    ) : (
                      <button
                        onClick={() => approveExpense(expense.id)}
                        className="bg-green-500 py-1 px-2 rounded-md text-white"
                      >
                        Approve
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <div className="relative">
                  <AiFillCheckCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-green-500" />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://thispersondoesnotexist.com/"
                  />
                </div>

                <div className="relative">
                  <AiFillMinusCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-orange-500" />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://thispersondoesnotexist.com/"
                  />
                </div>
              </div>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </li>
  );
}
