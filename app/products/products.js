"use client";
import React, { useState, useContext } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import Card from "../layout/card";
import Button from "../layout/button";
import SubHeading from "../layout/sub-heading";
import FlexCol from "../layout/flex-col";
import Confirmation from "../components/confirmation";
import { ItemsContext } from "../context/items-context";

export default function Products() {
  let [isOpen, setIsOpen] = useState(false);
  const { items } = useContext(ItemsContext);

  // delete items from database
  const deleteItem = async (id) => {
    setIsOpen(true);
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <Card>
      <Confirmation
        openDialog={isOpen}
        onClose={() => setIsOpen(false)}
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
                  className={`flex flex-col items-start gap-2 p-2 rounded-md bg-slate-100 ${
                    item.stock < 1 ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <Disclosure>
                    <Disclosure.Button className="flex items-center justify-start gap-2 w-full">
                      <img
                        className="rounded-md w-12 h-12 object-cover"
                        src={
                          item.image ? item.image : "https://placehold.co/48x48"
                        }
                      />
                      <span className="p-2 text-sm text-slate-700 font-bold flex w-full">
                        {item.name}
                        {item.stock < 1 && (
                          <span className="text-xs ml-auto font-normal">
                            Out of stock
                          </span>
                        )}
                        {item.stock > 0 && item.stock < 5 && (
                          <span className="text-xs ml-auto font-normal">
                            {item.stock} items left
                          </span>
                        )}
                      </span>
                      <AiOutlineRight className="ml-auto ui-open:rotate-90 ui-open:transform" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full rounded-md flex flex-col justify-end">
                      <div className="flex flex-col gap-4">
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
                          {/* <Button
                            label="Edit"
                            secondary
                            small
                          /> */}
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
