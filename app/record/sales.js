import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/auth-context";

export default function Sales({ sale }) {
  const { user } = UserAuth();
  const [salesUser, setSalesUser] = useState({});
  const pebenId = "tbuBqUOXP2TlqJmUM0VeYKwBEhY2";
  const chinoId = "UXQ7tG2XoqTmrbks3eUOlkBhNo92";
  const martinId = "aIrwQQEvjoN9aOuFsdyEd5hue5u2";

  useEffect(() => {
    onSnapshot(doc(db, "users", sale.uid), (snapshot) => {
      setSalesUser(snapshot.data() || {});
    });
  }, [salesUser.uid]);

  // paid sales
  const paidSales = async (id) => {
    await updateDoc(doc(db, "sales", id), {
      cash: true,
    });
  };

  // receivable sales
  const receivableSales = async (id) => {
    await updateDoc(doc(db, "sales", id), {
      cash: false,
    });
  };

  return (
    <li className="flex justify-between items-start gap-2 bg-slate-100 p-2 rounded-md">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span>{sale.product}</span>
          <span className="font-bold">x{sale.quantity}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span
            className={`rounded-md text-xs px-1 text-white ${
              sale.cash ? "bg-green-500" : "bg-orange-500"
            }`}
          >
            {sale.cash ? "Paid" : "Receivable"}
          </span>
          <span className="font-bold">₱{sale.totalPrice}</span>
        </div>
        {/* tingtong approval */}
        {user.uid === martinId && (
          <div className="flex gap-2 mt-2">
            {sale.cash ? (
              <button
                onClick={() => receivableSales(sale.id)}
                className="bg-red-500 py-1 px-2 text-xs rounded-md text-white"
              >
                Mark as Unpaid
              </button>
            ) : (
              <button
                onClick={() => paidSales(sale.id)}
                className="bg-green-500 py-1 px-2 text-xs rounded-md text-white"
              >
                Mark as Paid
              </button>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="font-bold">
          {new Date(sale?.createdAt?.seconds * 1000).toLocaleDateString(
            "en-US"
          )}
        </span>
        <div className="flex items-center ml-auto gap-2">
          <img className="w-6 h-6 rounded-full" src={salesUser.photoURL} />
          <span className="font-bold capitalize">
            {salesUser.displayName?.split(" ").slice(0, 2).join(" ")}
          </span>
        </div>
        <small className="font-mono text-slate-500">UID: {sale.uid}</small>
      </div>
    </li>
  );
}
