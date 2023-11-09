"use client";
import React, { useState, useEffect } from "react";
import {
  doc,
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
  runTransaction,
} from "firebase/firestore";
import { db } from "../firebase";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import SubHeading from "../layout/sub-heading";
import FlexCol from "../layout/flex-col";
import Card from "../layout/card";
import { UserAuth } from "../context/auth-context";
import Confirmation from "../components/confirmation";
import Sales from "./sales";
import Button from "../layout/button";

export default function RecordSales() {
  const { user } = UserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [sales, setSales] = useState([]);
  const [checked, setChecked] = useState(true);
  const [newSale, setNewSale] = useState({
    product: "",
    quantity: "",
    totalPrice: "",
    cash: "",
  });

  // checkbox
  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

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

  // add sale to database
  const addSale = async (id) => {
    if (user && newSale.product !== "" && newSale.quantity !== "") {
      setIsOpen(true);
      await addDoc(collection(db, "sales"), {
        product: newSale.product,
        quantity: newSale.quantity,
        totalPrice: newSale.totalPrice,
        cash: checked,
        createdAt: serverTimestamp(),
        uid: user.uid,
        productId: newSale.productId,
      });
      const itemRef = doc(db, "items", newSale.productId);
      await runTransaction(db, async (t) => {
        const item = await t.get(itemRef);
        if (!item) return;
        const itemStock = item.data().stock - newSale.quantity;
        if (itemStock >= 0) {
          t.update(itemRef, { stock: itemStock });
        }
      });
      setNewSale({ product: "", quantity: "", totalPrice: "" });
    }
  };

  // read sales from database
  useEffect(() => {
    const q = query(collection(db, "sales"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let salesArr = [];

      querySnapshot.forEach((doc) => {
        salesArr.push({ ...doc.data(), id: doc.id });
      });
      setSales(salesArr);
      return () => unsubscribe();
    });
  }, []);

  function renderTotal() {
    const salesLength = parseInt(sales.length);
    var totalSales = 0;

    for (let i = 0; i < salesLength; i++) {
      totalSales = parseInt(sales[i]?.quantity) + totalSales;
    }

    return (
      <span className="text-base text-neutral-600 font-bold">
        {totalSales} perfumes sold
      </span>
    );
  }

  if (!user) {
    return (
      <Padded>
        <FlexCol>
          <MainHeading>Record</MainHeading>
          <SubHeading>Access Denied. Please Login</SubHeading>
        </FlexCol>
      </Padded>
    );
  }

  return (
    <FlexCol>
      <Card>
        <Confirmation
          openDialog={isOpen}
          onClose={() => setIsOpen(false)}
          heading="Sales Added!"
          message="Sales has successfully been recorded!"
        />
        <SubHeading>Sales</SubHeading>
        <div className="mt-2"></div>
        <FlexCol>
          <select
            className="border rounded-md py-2.5 px-2 text-neutral-700"
            defaultValue={"Choose a product"}
            onChange={(e) => {
              const [productId, product] = e.target.value.split(":");
              setNewSale({ ...newSale, productId, product });
            }}
          >
            <option disabled hidden>
              Choose a product
            </option>
            {!items
              ? "loading"
              : items.map((item, index) => {
                  return (
                    <option key={index} value={`${item.id}:${item.name}`}>
                      {item.name}
                    </option>
                  );
                })}
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input
              value={newSale.quantity}
              onChange={(e) =>
                setNewSale({ ...newSale, quantity: e.target.value })
              }
              className="text-sm border w-full px-5 py-2.5 rounded-md"
              type="number"
              placeholder="Quantity"
            />
            <input
              value={newSale.totalPrice}
              onChange={(e) =>
                setNewSale({ ...newSale, totalPrice: e.target.value })
              }
              className="text-sm border w-full px-5 py-2.5 rounded-md"
              type="number"
              placeholder="Total Price"
            />
          </div>
          <div className="flex gap-2 ml-2">
            <input
              type="checkbox"
              name="credit"
              value={checked}
              onChange={handleChange}
            />
            <label htmlFor="credit" className="text-sm text-neutral-700">
              Receivable?
            </label>
          </div>
          <Button onClick={addSale} label="Record" styles="w-full" />
        </FlexCol>
      </Card>

      <Card>
        <SubHeading>Total Sales</SubHeading>
        {renderTotal()}
      </Card>

      <Card>
        <SubHeading>Sold Items</SubHeading>
        <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
          {!sales
            ? "loading"
            : sales.slice(0, 5).map((sale, index) => {
                return <Sales sale={sale} key={`sales-${index}`} />;
              })}
        </ul>
      </Card>
    </FlexCol>
  );
}
