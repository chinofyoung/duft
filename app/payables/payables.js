import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Payables({ payable }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    onSnapshot(doc(db, "users", payable.uid), (snapshot) => {
      setUser(snapshot.data() || {});
    });
  }, [user.uid]);

  return (
    <li className="flex justify-between items-start gap-2 bg-slate-100 p-2 rounded-md">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <span className="font-bold">{payable.name}</span>
          <div className="flex gap-4">
            <span>₱{payable.cost.toLocaleString("en-US")}</span>
            <span>from {payable.source}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="font-bold">
          {new Date(payable?.createdAt?.seconds * 1000).toLocaleDateString(
            "en-US"
          )}
        </span>
        <div className="flex items-center ml-auto gap-2">
          <img className="w-6 h-6 rounded-full" src={user.photoURL} />
          <span className="font-bold">{user.displayName}</span>
        </div>
      </div>
    </li>
  );
}
