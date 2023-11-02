import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Sales({ sale }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    onSnapshot(doc(db, "users", sale.uid), (snapshot) => {
      setUser(snapshot.data() || {});
    });
  }, [user.uid]);
  return (
    <li className="flex justify-between items-start gap-2 bg-slate-100 p-2 rounded-md">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span>{sale.product}</span>
          <span className="font-bold">x{sale.quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-6 h-6 rounded-full" src={user.photoURL} />
          <span className="font-bold">{user.displayName}</span>
        </div>
      </div>
      <span className="ml-2 font-bold">
        {new Date(sale?.createdAt?.seconds * 1000).toLocaleDateString("en-US")}
      </span>
    </li>
  );
}
