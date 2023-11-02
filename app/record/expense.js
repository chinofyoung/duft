import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Disclosure } from "@headlessui/react";
import {
  AiOutlineRight,
  AiFillCheckCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Image from "next/image";

export default function Sales({ expense }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    onSnapshot(doc(db, "users", expense.uid), (snapshot) => {
      setUser(snapshot.data() || {});
    });
  }, [user.uid]);

  return (
    <li className="flex flex-col gap-2 bg-slate-100 p-2 pr-4 rounded-md">
      <Disclosure>
        <Disclosure.Button>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                className="object-cover"
                alt="Default photo"
                src={
                  expense.image ? expense.image : "https://placehold.co/96x96"
                }
                width={48}
                height={48}
              />
            </div>
            <span className="text-sm font-bold">{expense.name}</span>
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
              <strong>Cost:</strong>₱{expense.cost.toLocaleString("en-US")}
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
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src={user.photoURL} />
              <span className="font-bold">{user.displayName}</span>
            </div>
            <div className="flex justify-between items-center col-span-2 border-t border-solid pt-2">
              <div className="flex flex-col">
                <strong>Status:</strong>
                <span>Pending</span>
              </div>

              <div className="flex gap-2">
                <div className="relative">
                  <AiFillCheckCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-green-500" />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://thispersondoesnotexist.com/"
                  />
                </div>

                <div className="relative">
                  <AiFillMinusCircle className="text-sm bg-white rounded-full absolute bottom-0 right-0 text-orange-500" />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://thispersondoesnotexist.com/"
                  />
                </div>
              </div>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </li>
  );
}
