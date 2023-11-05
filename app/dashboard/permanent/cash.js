import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function Cash() {
  const [sales, setSales] = useState([]);

  // read sales from database
  useEffect(() => {
    const q = query(collection(db, "sales"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let salesArr = [];

      querySnapshot.forEach((doc) => {
        salesArr.push({ ...doc.data(), id: doc.id });
      });
      setSales(salesArr);
      return () => unsubscribe();
    });
  }, []);

  // cash sales
  const cashSales = sales.filter((sale) => sale.cash === true);

  function renderTotal() {
    const salesLength = parseInt(cashSales.length);
    var totalSales = 0;
    for (let i = 0; i < salesLength; i++) {
      totalSales = parseInt(cashSales[i]?.totalPrice) + totalSales;
    }
    return totalSales.toLocaleString("en-US");
  }

  return (
    <span className="flex flex-col bg-slate-200 p-2 rounded-md">
      {/* from sales, convert from receivable, capital can add, expenses can deduct, payable can add, retained earnings can deduct */}
      Cash: <strong className="text-lg">₱{renderTotal()}</strong>
    </span>
  );
}
