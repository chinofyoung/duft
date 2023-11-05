import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function Receivables() {
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

  // credit sales
  const cashSales = sales.filter((sale) => sale.cash === false);

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
      {/* total receivables from tagsa tagsa */}
      Receivables: <strong className="text-lg">₱{renderTotal()}</strong>
    </span>
  );
}
