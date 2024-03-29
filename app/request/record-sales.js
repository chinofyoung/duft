"use client";
import React, { useState, useContext } from "react";
import {
  doc,
  collection,
  addDoc,
  serverTimestamp,
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
import { SalesContext } from "../context/sales-context";
import { ItemsContext } from "../context/items-context";

export default function RecordSales() {
  const { user } = UserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { sales } = useContext(SalesContext);
  const { items } = useContext(ItemsContext);
  const [checked, setChecked] = useState(false);
  const [newSale, setNewSale] = useState({
    product: "",
    quantity: "",
    totalPrice: "",
    cash: "",
    cost: "",
  });

  // checkbox
  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  // credit sales
  const inStock = items.filter((item) => item.stock > 0);

  // add sale to database
  const addSale = async (e) => {
    e.preventDefault();
    if (user && newSale.product !== "" && newSale.quantity !== "") {
      setIsOpen(true);
      await addDoc(collection(db, "sales"), {
        product: newSale.product,
        quantity: newSale.quantity,
        cash: checked,
        createdAt: serverTimestamp(),
        uid: user.uid,
        productId: newSale.productId,
        cost: items[0].cost * newSale.quantity,
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

  function renderTotal() {
    const salesLength = parseInt(sales.length);
    var totalSales = 0;

    for (let i = 0; i < salesLength; i++) {
      totalSales = parseInt(sales[i]?.quantity) + totalSales;
    }

    return (
      <span className="text-base text-neutral-600 font-bold">{totalSales}</span>
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
            {!inStock
              ? "loading"
              : inStock.map((item, index) => {
                  return (
                    <option key={index} value={`${item.id}:${item.name}`}>
                      {item.name}
                    </option>
                  );
                })}
          </select>
          <input
            value={newSale.quantity}
            onChange={(e) =>
              setNewSale({ ...newSale, quantity: e.target.value })
            }
            className="text-sm border w-full px-5 py-2.5 rounded-md"
            type="number"
            placeholder="Quantity"
          />
          <Button onClick={addSale} label="Record" styles="w-full" />
        </FlexCol>
      </Card>

      <Card>
        <SubHeading>Bottles distributed</SubHeading>
        {renderTotal()}
      </Card>

      <Card>
        <SubHeading>Sub Inventory</SubHeading>
        <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
          {!sales ? (
            <p>loading...</p>
          ) : (
            sales.map((sale, index) => {
              return <Sales sale={sale} key={`sales-${index}`} />;
            })
          )}
        </ul>
      </Card>
    </FlexCol>
  );
}
