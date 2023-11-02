"use client";
import React, { useState, useEffect } from "react";
import { message, Progress } from "antd";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { UserAuth } from "../context/auth-context";
import Image from "next/image";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import SubHeading from "../layout/sub-heading";
import FlexCol from "../layout/flex-col";
import Card from "../layout/card";
import { Disclosure } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";
import Confirmation from "../components/confirmation";

export default function RecordExpense() {
  let [isOpen, setIsOpen] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const [progressUpload, setProgressUpload] = useState(0);
  const { user } = UserAuth();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    name: "",
    cost: "",
    description: "",
    reference: "",
    image: "",
  });

  const handleSelectedFile = (files) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);

      console.log(files[0]);
    } else {
      message.error("File size to large");
    }
  };

  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          message.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url);
          });
        }
      );
    } else {
      message.error("File not found");
    }
  };

  const handleRemoveFile = () => setImageFile(undefined);

  // add expense to database
  const addExpense = async (e) => {
    e.preventDefault();
    if (user && newExpense.name !== "" && newExpense.cost !== "") {
      setIsOpen(true);
      await addDoc(collection(db, "expenses"), {
        name: newExpense.name,
        cost: newExpense.cost,
        description: newExpense.description,
        reference: newExpense.reference,
        image: downloadURL,
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
      setNewExpense({
        name: "",
        cost: "",
        description: "",
        reference: "",
        image: "",
      });
    }
  };

  // read expenses from database
  useEffect(() => {
    const q = query(
      collection(db, "expenses"),
      orderBy("createdAt", "desc")
      // limit(5)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expenseArr = [];

      querySnapshot.forEach((doc) => {
        expenseArr.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expenseArr);
    });
  }, []);

  function renderTotal() {
    const expenseLength = parseInt(expenses.length);
    var totalExpenses = 0;

    for (let i = 0; i < expenseLength; i++) {
      totalExpenses = parseInt(expenses[i]?.cost) + totalExpenses;
    }

    return (
      <span className="text-base text-neutral-600">
        ₱<strong>{totalExpenses.toLocaleString("en-US")}</strong>
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
      <Confirmation
        openDialog={isOpen}
        heading="Expense Added!"
        message="Expense has successfully been recorded!"
      />
      <Card>
        <SubHeading>Expenses</SubHeading>
        <div className="mt-2"></div>
        <FlexCol>
          <input
            value={newExpense.name}
            onChange={(e) =>
              setNewExpense({ ...newExpense, name: e.target.value })
            }
            className="text-sm border w-full px-5 py-2.5 rounded-md"
            type="text"
            placeholder="Name"
          />
          <textarea
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
            className="text-sm border w-full px-5 py-2.5 rounded-md"
            type="textarea"
            placeholder="Description"
          />
          <input
            value={newExpense.cost}
            onChange={(e) =>
              setNewExpense({ ...newExpense, cost: e.target.value })
            }
            className="text-sm border w-full px-5 py-2.5 rounded-md"
            type="number"
            placeholder="Cost"
          />
          <input
            value={newExpense.reference}
            onChange={(e) =>
              setNewExpense({ ...newExpense, reference: e.target.value })
            }
            className="text-sm border w-full px-5 py-2.5 rounded-md"
            type="number"
            placeholder="Reference No."
          />

          {imageFile ? (
            ""
          ) : (
            <input
              className="border-none bg-slate-200 rounded-md"
              type="file"
              accept="image/*"
              onChange={(files) => handleSelectedFile(files.target.files)}
            />
          )}

          {imageFile && (
            <>
              <div className="flex justify-between">
                {downloadURL && (
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      className="object-cover border border-solid rounded-lg"
                      src={downloadURL}
                      alt={downloadURL}
                      width={100}
                      height={100}
                    />
                  </div>
                )}
                <FlexCol>
                  <button
                    onClick={handleRemoveFile}
                    className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-neutral-500"
                  >
                    Remove
                  </button>

                  <button
                    onClick={handleUploadFile}
                    className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-blue-500"
                  >
                    Upload
                  </button>

                  <Progress percent={progressUpload} />
                </FlexCol>
              </div>

              {/* <div>
                    <span className="text-xs">{imageFile.name}</span>
                    <span className="text-xs">Size: {imageFile.size}</span>
                  </div> */}
            </>
          )}

          <button
            onClick={addExpense}
            className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-red-500"
          >
            Request
          </button>
        </FlexCol>
      </Card>
      <Card>
        <SubHeading>Total Expenses</SubHeading>
        {renderTotal()}
      </Card>
      <Card>
        <SubHeading>Expenses</SubHeading>
        <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
          {!expenses
            ? "loading"
            : expenses.map((expense, index) => {
                return (
                  <li
                    className="flex flex-col gap-2 bg-slate-100 p-2 pr-4 rounded-md"
                    key={index}
                  >
                    <Disclosure>
                      <Disclosure.Button>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg overflow-hidden">
                            <Image
                              className="object-cover"
                              alt="Default photo"
                              src={
                                expense.image
                                  ? expense.image
                                  : "https://placehold.co/96x96"
                              }
                              width={48}
                              height={48}
                            />
                          </div>
                          <span className="text-sm font-bold">
                            {expense.name}
                          </span>
                          <AiOutlineRight className="ml-auto text-base ui-open:rotate-90 ui-open:transform" />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <div className="grid grid-cols-2 gap-2 p-2 border-t border-solid">
                          <div className="flex flex-col">
                            <strong>Description:</strong>
                            {expense.description}
                          </div>
                          <div className="flex flex-col">
                            <strong>Cost:</strong>₱
                            {expense.cost.toLocaleString("en-US")}
                          </div>
                          <div className="flex flex-col">
                            <strong>Reference #</strong>
                            <span>{expense.reference}</span>
                          </div>
                          <div className="flex flex-col">
                            <strong>Date submitted:</strong>
                            <span>
                              {new Date(
                                expense?.createdAt?.seconds * 1000
                              ).toLocaleDateString("en-US")}
                            </span>
                          </div>
                          <div className="flex justify-between items-center col-span-2 border-t border-solid pt-2">
                            <div className="flex flex-col">
                              <strong>Status:</strong>
                              <span>Pending</span>
                            </div>

                            <div className="flex gap-2">
                              <img
                                className="w-8 h-8 rounded-full"
                                src="https://thispersondoesnotexist.com/"
                              />
                              <img
                                className="w-8 h-8 rounded-full opacity-50"
                                src="https://thispersondoesnotexist.com/"
                              />
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Disclosure>
                  </li>
                );
              })}
        </ul>
      </Card>
    </FlexCol>
  );
}
