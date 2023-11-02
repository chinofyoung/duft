"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserAuth } from "./context/auth-context";
import Padded from "./layout/padded";
import FlexCol from "./layout/flex-col";
import Card from "./layout/card";
import MainHeading from "./layout/main-heading";
import { AiFillSetting, AiOutlineDatabase } from "react-icons/ai";
import { BsClipboard2Data, BsFillCartFill } from "react-icons/bs";
import SubHeading from "./layout/sub-heading";

export default function Home() {
  const { user } = UserAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  const menu = [
    {
      url: "/record",
      label: "Record",
      icon: <AiOutlineDatabase />,
      disabled: false,
    },
    {
      url: "/products",
      label: "Products",
      icon: <BsFillCartFill />,
      disabled: false,
    },
    {
      url: "/reports",
      label: "Reports",
      icon: <BsClipboard2Data />,
      disabled: false,
    },
    {
      url: "/settings",
      label: "Settings",
      icon: <AiFillSetting />,
      disabled: true,
    },
  ];

  return (
    <Padded>
      {user ? (
        <FlexCol>
          <Card>
            <div className="flex overflow-hidden">
              <div className="flex flex-col gap-2">
                <span className="text-slate-700 text-lg">
                  Welcome, <strong>{user?.displayName}</strong>!
                </span>
                <p className="text-slate-600 text-sm">
                  This application keeps track of everything from inventory,
                  sales, to expenses.
                </p>
              </div>
              <img
                className="object-cover -mr-12 -mb-8 rounded-lg"
                src="/static/dash.jpg"
                width={150}
                height={150}
              />
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/record"
              className="bg-slate-200 w-full rounded-lg text-neutral-700 p-4 flex flex-col gap-2"
            >
              <AiOutlineDatabase className="text-2xl" />
              <strong>Record</strong>
              <p className="text-xs">Record sales and expenses</p>
            </Link>
            <Link
              href="/record"
              className="bg-orange-500 w-full rounded-lg text-white p-4 flex flex-col gap-2"
            >
              <BsFillCartFill className="text-2xl" />
              <strong>Products</strong>
              <p className="text-xs">Add or edit existing products</p>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {menu.map(function (menu, index) {
              return (
                <Link
                  key={index}
                  href={menu.url}
                  className={`h-auto p-4 rounded-xl flex items-center justify-center border-2 border-solid flex-col gap-2 ${
                    menu.disabled
                      ? "bg-slate-200 border-slate-300 text-slate-300"
                      : "border-slate-500  text-slate-700"
                  }`}
                >
                  <span className="text-2xl">{menu.icon}</span>
                  <span className="text-xs">{menu.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="gap-4 rounded-lg flex bg-slate-200 p-2 flex-col">
            <div className="flex gap-2 text-xs mt-2">
              <a
                href=""
                className="text-slate-700 bg-slate-300 px-4 py-1 flex items-center rounded-md"
              >
                Day
              </a>
              <a
                href=""
                className="text-white bg-slate-600 px-4 py-1 flex items-center rounded-md font-bold"
              >
                Month
              </a>
              <a
                href=""
                className="text-slate-700 bg-slate-300 px-4 py-1 flex items-center rounded-md"
              >
                Year
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-lime-600 rounded-md p-4 shadow-sm">
                <h3 className="text-lg text-white">Sales</h3>
                <div className="flex flex-col text-white">
                  <span className="text-xs">
                    Gross Sales: <strong>23,240</strong>
                  </span>
                  <span className="text-xs">
                    Bottles Sold: <strong>87</strong>
                  </span>
                  <span className="text-xs">
                    Net Profit: <strong>15,240</strong>
                  </span>
                </div>
              </div>
              <div className="bg-red-500 rounded-md p-4 shadow-sm">
                <h3 className="text-lg text-white">Expenses</h3>
                <div className="flex flex-col text-white">
                  <span className="text-xs">
                    Total Expenses: <strong>13,240</strong>
                  </span>
                </div>
              </div>
              <div className="bg-cyan-500 rounded-md p-4 shadow-sm">
                <h3 className="text-lg text-white">Inventory</h3>
                <div className="flex flex-col text-white">
                  <span className="text-xs">
                    Men: <strong>395</strong>
                  </span>
                  <span className="text-xs">
                    Women: <strong>298</strong>
                  </span>
                </div>
              </div>
              <div className="bg-teal-500 rounded-md p-4 shadow-sm">
                <h3 className="text-lg text-white">Receivables</h3>
                <div className="flex flex-col text-white">
                  <span className="text-xs">
                    Total: <strong>16,430</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FlexCol>
      ) : (
        <div>Please Login</div>
      )}
    </Padded>
  );
}
