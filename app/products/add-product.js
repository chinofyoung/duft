"use client";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import Card from "../layout/card";
import FlexCol from "../layout/flex-col";
import SubHeading from "../layout/sub-heading";

export default function AddProduct() {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });

  // add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "") {
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price,
        quantity: newItem.quantity,
        image: newItem.image,
        createdAt: serverTimestamp(),
      });
      setNewItem({ name: "", price: "", quantity: "", image: "" });
    }
  };

  return (
    <Card>
      <Disclosure>
        <FlexCol>
          <Disclosure.Button className="flex justify-between items-center">
            <SubHeading>Add Product</SubHeading>
            <AiOutlineRight className="ml-auto ui-open:rotate-90 ui-open:transform" />
          </Disclosure.Button>
          <Disclosure.Panel>
            <form>
              <FlexCol>
                <input
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="text"
                  placeholder="Name"
                />
                <input
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="number"
                  placeholder="Price"
                />
                <input
                  value={newItem.quantity}
                  onChange={(e) =>
                    setNewItem({ ...newItem, quantity: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="number"
                  placeholder="Quantity"
                />
                <input
                  value={newItem.image}
                  onChange={(e) =>
                    setNewItem({ ...newItem, image: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="text"
                  placeholder="Image"
                />
                <button
                  onClick={addItem}
                  className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-red-500"
                >
                  Save
                </button>
              </FlexCol>
            </form>
          </Disclosure.Panel>
        </FlexCol>
      </Disclosure>
    </Card>
  );
}
