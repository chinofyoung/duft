"use client";
import React, { useState, useContext } from "react";
import { message, Progress, Image } from "antd";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { UserAuth } from "../context/auth-context";
import Padded from "../layout/padded";
import MainHeading from "../layout/main-heading";
import SubHeading from "../layout/sub-heading";
import FlexCol from "../layout/flex-col";
import Card from "../layout/card";
import Confirmation from "../components/confirmation";
import Expense from "./expense";
import Button from "../layout/button";
import { Tab } from "@headlessui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ExpensesContext } from "../context/expenses-context";

export default function RecordExpense() {
  let [isOpen, setIsOpen] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const [progressUpload, setProgressUpload] = useState(0);
  const { user } = UserAuth();
  const { pending, approved } = useContext(ExpensesContext);
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
        approvedT: false,
        approvedP: false,
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

  function renderTotal() {
    const expenseLength = parseInt(approved.length);
    var totalExpenses = 0;

    for (let i = 0; i < expenseLength; i++) {
      totalExpenses = parseInt(approved[i]?.cost) + totalExpenses;
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
        onClose={() => setIsOpen(false)}
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
            <div className="w-full bg-slate-50 border border-slate-200 flex justify-center items-center rounded-lg h-24">
              <input
                className="border-none bg-slate-200 rounded-md"
                id="upload-file"
                type="file"
                accept="image/*"
                onChange={(files) => handleSelectedFile(files.target.files)}
                hidden
              />
              <label
                htmlFor="upload-file"
                className="w-12 h-12 text-neutral-500 flex flex-col justify-center items-center"
              >
                <AiOutlineCloudUpload className="text-3xl" />{" "}
                <span className="text-xs font-bold">Upload</span>
              </label>
            </div>
          )}

          {imageFile && (
            <>
              <div className="flex flex-col items-center w-full">
                {downloadURL && (
                  <div className="max-h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src={downloadURL}
                      alt="Uploaded Image"
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                )}
                <div className="flex flex-col  w-full items-end">
                  <Progress percent={progressUpload} status="active" />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleRemoveFile}
                      label="Remove"
                      secondary
                      small
                    />
                    <Button onClick={handleUploadFile} label="Upload" small />
                  </div>
                </div>
              </div>
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
              {pending.length < 1 ? (
                <span className="text-sm text-neutral-700">
                  No records yet.
                </span>
              ) : (
                <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
                  {!pending
                    ? "loading"
                    : pending.map((expense, index) => {
                        return (
                          <Expense expense={expense} key={`expense-${index}`} />
                        );
                      })}
                </ul>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {approved.length < 1 ? (
                <span className="text-sm text-neutral-700">
                  No records yet.
                </span>
              ) : (
                <ul className="text-xs flex flex-col gap-1 text-slate-700 mt-2">
                  {!approved
                    ? "loading"
                    : approved.map((expense, index) => {
                        return (
                          <Expense expense={expense} key={`expense-${index}`} />
                        );
                      })}
                </ul>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
    </FlexCol>
  );
}
