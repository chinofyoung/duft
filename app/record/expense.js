import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Image } from "antd";
import { Disclosure } from "@headlessui/react";
import {
  AiOutlineRight,
  AiFillCheckCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { UserAuth } from "../context/auth-context";

export default function Sales({ expense }) {
  const { user } = UserAuth();
  const [expenseUser, setExpenseUser] = useState({});
  const pebenId = "tbuBqUOXP2TlqJmUM0VeYKwBEhY2";
  const chinoId = "UXQ7tG2XoqTmrbks3eUOlkBhNo92";
  const martinId = "aIrwQQEvjoN9aOuFsdyEd5hue5u2";

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    onSnapshot(doc(db, "users", expense.uid), (snapshot) => {
      setExpenseUser(snapshot.data() || {});
    });
  }, [expenseUser.uid]);

  // approve expense tingtong
  const approveExpenseT = async (id) => {
    await updateDoc(doc(db, "expenses", id), {
      approvedT: true,
    });
  };

  // approve expense peben
  const approveExpenseP = async (id) => {
    await updateDoc(doc(db, "expenses", id), {
      approvedP: true,
    });
  };

  // reject expenseT
  const rejectExpenseT = async (id) => {
    await updateDoc(doc(db, "expenses", id), {
      approvedT: false,
    });
  };

  // reject expenseP
  const rejectExpenseP = async (id) => {
    await updateDoc(doc(db, "expenses", id), {
      approvedP: false,
    });
  };

  return (
    <li className="flex flex-col gap-2 bg-slate-100 p-2 pr-4 rounded-md">
      <Disclosure>
        <Disclosure.Button>
          <div className="flex items-center py-2 pl-2 gap-4">
            <span className="text-sm font-bold text-left">
              {expense.name.substring(0, 33)}
              {expense.name.length > 32 && "..."}
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
              <img
                className="w-6 h-6 rounded-full"
                src={expenseUser.photoURL}
              />
              <span className="font-bold">{expenseUser.displayName}</span>
            </div>
            <div className="flex justify-between items-center col-span-2 border-t border-solid pt-2">
              <div className="flex flex-col">
                {/* tingtong approval */}
                {user.uid === martinId && (
                  <div className="flex gap-2 mt-2">
                    {expense.approvedT ? (
                      <button
                        onClick={() => rejectExpenseT(expense.id)}
                        className="bg-red-500 py-1 px-2 rounded-md text-white"
                      >
                        Reject
                      </button>
                    ) : (
                      <button
                        onClick={() => approveExpenseT(expense.id)}
                        className="bg-green-500 py-1 px-2 rounded-md text-white"
                      >
                        Approve
                      </button>
                    )}
                  </div>
                )}
                {/* peben approval */}
                {user.uid === pebenId && (
                  <div className="flex gap-2 mt-2">
                    {expense.approvedP ? (
                      <button
                        onClick={() => rejectExpenseP(expense.id)}
                        className="bg-red-500 py-1 px-2 rounded-md text-white"
                      >
                        Reject
                      </button>
                    ) : (
                      <button
                        onClick={() => approveExpenseP(expense.id)}
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
                  {expense.approvedT ? (
                    <AiFillCheckCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-green-500" />
                  ) : (
                    <AiFillMinusCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-orange-500" />
                  )}
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://lh3.googleusercontent.com/a/ACg8ocIYCJfVmhmYgrZ5tzDORh3Bwn-PRzVUgfMB2DFVE705=s96-c"
                  />
                </div>

                <div className="relative">
                  {expense.approvedP ? (
                    <AiFillCheckCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-green-500" />
                  ) : (
                    <AiFillMinusCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-orange-500" />
                  )}
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://lh3.googleusercontent.com/a/ACg8ocJutxQsqRI_sKxWjN0ggE_1bcGURVL5IfMSFlt4p5flOA=s96-c"
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
