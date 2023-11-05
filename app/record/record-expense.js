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
import Confirmation from "../components/confirmation";
import Expense from "./expense";
import Button from "../layout/button";
import { Tab } from "@headlessui/react";

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
    approvedT: false,
    approvedP: false,
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
        approved: false,
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
      return () => unsubscribe();
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

  const pending = expenses.filter((expense) => expense.approvedT === false || expense.approvedP === false);
  const approved = expenses.filter((expense) => expense.approvedT === true && expense.approvedP === true);

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
          <div className="grid grid-cols-2 gap-4">
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
          </div>

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
                      alt="Uploaded Image"
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
          <Button onClick={addExpense} label="Request" styles="w-full" />
        </FlexCol>
      </Card>
      <Card>
        <SubHeading>Total Expenses</SubHeading>
        {renderTotal()}
      </Card>
      <Card>
        <SubHeading>Expenses</SubHeading>

        <Tab.Group>
          <Tab.List className="grid grid-cols-2 my-4">
            <Tab as="div">
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "bg-slate-600 text-white" : "bg-slate-200"
                  }  w-full py-2 rounded-l-lg`}
                >
                  Pending
                </button>
              )}
            </Tab>
            <Tab as="div">
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "bg-slate-600 text-white" : "bg-slate-200"
                  }  w-full py-2 rounded-r-lg`}
                >
                  Approved
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
                {!pending
                  ? "loading"
                  : pending.map((expense, index) => {
                      return (
                        <Expense expense={expense} key={`expense-${index}`} />
                      );
                    })}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
                {!approved
                  ? "loading"
                  : approved.map((expense, index) => {
                      return (
                        <Expense expense={expense} key={`expense-${index}`} />
                      );
                    })}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
    </FlexCol>
  );
}
