"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import Card from "../layout/card";
import Button from "../layout/button";
import SubHeading from "../layout/sub-heading";
import Confirmation from "../components/confirmation";

export default function Products() {
  let [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  // read items from database
  useEffect(() => {
    const q = query(collection(db, "items"), orderBy("name", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
      return () => unsubscribe();
    });
  }, []);

  // delete items from database
  const deleteItem = async (id) => {
    setIsOpen(true);
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <Card>
      <Confirmation
        openDialog={isOpen}
        heading="Product deleted!"
        message="Product has been successfully deleted!"
      />
      <SubHeading>Products</SubHeading>
      <ul className="flex flex-col gap-2 mt-4">
        {!items
          ? "loading"
          : items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-col items-start gap-2 bg-slate-100 p-2 rounded-md"
                >
                  <Disclosure>
                    <Disclosure.Button className="flex items-center justify-start gap-2 w-full">
                      <img
                        className="rounded-md w-12 h-12 object-cover"
                        src={
                          item.image ? item.image : "https://placehold.co/48x48"
                        }
                      />
                      <span className="p-2 inline text-sm text-slate-700 font-bold">
                        {item.name}
                      </span>
                      <AiOutlineRight className="ml-auto ui-open:rotate-90 ui-open:transform" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full rounded-md flex flex-col justify-end">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-slate-800 p-4 bg-slate-200 rounded-md">
                          <span>
                            Price: <strong>₱{item.price}</strong>
                          </span>
                          <span>
                            Cost: <strong>₱{item.cost}</strong>
                          </span>
                          <span>
                            Stock: <strong>{item.stock}</strong>
                          </span>
                        </div>
                        <div className="flex self-end gap-2">
                          <Button label="Edit" secondary small />
                          <Button
                            label="Delete"
                            small
                            onClick={() => deleteItem(item.id)}
                          />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Disclosure>
                </li>
              );
            })}
      </ul>
    </Card>
  );
}
