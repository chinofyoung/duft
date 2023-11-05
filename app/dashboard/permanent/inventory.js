import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function Inventory() {
  const [items, setItems] = useState([]);

  // read items from database
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
      return () => unsubscribe();
    });
  }, []);

  // render total stocks
  function renderTotalStocks() {
    let stocksLength = parseInt(items.length);
    let totalStocks = 0;
    for (let i = 0; i < stocksLength; i++) {
      totalStocks = parseInt(items[i]?.quantity) + totalStocks;
    }
    return totalStocks;
  }

  // render total cost
  function renderTotalCost() {
    let stocksLength = parseInt(items.length);
    let totalCost = 0;
    for (let i = 0; i < stocksLength; i++) {
      totalCost =
        parseInt(items[i]?.cost) * parseInt(items[i]?.quantity) + totalCost;
    }
    return totalCost.toLocaleString("en-US");
  }
  
  return (
    <div className="flex flex-col gap-2 bg-slate-50 p-2 rounded-md">
      <span className="flex flex-col">
        Inventory:
        <strong className="text-lg">{renderTotalStocks()}</strong>
      </span>
      <span className="flex flex-col">
        Total Inventory Cost:
        <strong className="text-lg">₱{renderTotalCost()}</strong>
      </span>
    </div>
  );
}
