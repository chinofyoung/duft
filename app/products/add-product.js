"use client";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import Card from "../layout/card";
import FlexCol from "../layout/flex-col";
import SubHeading from "../layout/sub-heading";
import Confirmation from "../components/confirmation";

export default function AddProduct() {
  let [isOpen, setIsOpen] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    cost: "",
    stock: "",
    image: "",
  });

  // add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "") {
      setIsOpen(true);
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price,
        cost: newItem.cost,
        stock: newItem.stock,
        image: newItem.image,
        createdAt: serverTimestamp(),
      });
      setNewItem({ name: "", price: "", cost: "", stock: "", image: "" });
    }
  };

  return (
    <Card>
      <Confirmation
        openDialog={isOpen}
        heading="Product Added!"
        message="Product has successfully been added!"
      />
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
                  value={newItem.cost}
                  onChange={(e) =>
                    setNewItem({ ...newItem, cost: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="number"
                  placeholder="Cost per product"
                />
                <input
                  value={newItem.stock}
                  onChange={(e) =>
                    setNewItem({ ...newItem, stock: e.target.value })
                  }
                  className="text-sm border w-full px-5 py-2.5 rounded-md"
                  type="number"
                  placeholder="Stock"
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
                  Add
                </button>
              </FlexCol>
            </form>
          </Disclosure.Panel>
        </FlexCol>
      </Disclosure>
    </Card>
  );
}
