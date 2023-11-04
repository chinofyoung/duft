import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Card from "../layout/card";
import FlexCol from "../layout/flex-col";
import SubHeading from "../layout/sub-heading";

export default function PermanentStats() {
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
    return totalCost;
  }

  return (
    <Card>
      <FlexCol>
        <SubHeading>Permanent Accounts</SubHeading>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* from sales, convert from receivable, capital can add, expenses can deduct, payable can add, retained earnings can deduct */}
          <span className="flex flex-col bg-slate-200 p-2 rounded-md">
            Cash: <strong>₱12,320</strong>
          </span>
          {/* total receivables from tagsa tagsa */}
          <span className="flex flex-col bg-slate-200 p-2 rounded-md">
            Receivables: <strong>₱23,200</strong>
          </span>
          {/* total capital from tagsa tagsa na aragmot */}
          <span className="flex flex-col bg-slate-200 p-2 rounded-md">
            Capital: <strong>₱23,202</strong>
          </span>
          {/* sales - cost of sales - expenses */}
          <span className="flex flex-col bg-slate-200 p-2 rounded-md">
            Retained Earnings: <strong>₱23,120</strong>
          </span>
          {/* inutang pwede mag add hin utang*/}
          <span className="flex flex-col bg-slate-200 p-2 rounded-md">
            Payable: <strong>₱13,120</strong>
          </span>{" "}
          <div className="flex flex-col gap-2 bg-slate-200 p-2 rounded-md">
            <span className="flex flex-col">
              Inventory: <strong>{renderTotalStocks()}</strong>
            </span>
            <span className="flex flex-col">
              Total cost:
              <strong>{renderTotalCost()}</strong>
            </span>
          </div>
        </div>
      </FlexCol>
    </Card>
  );
}
