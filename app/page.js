"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProgressBar } from "react-loader-spinner";
import { UserAuth } from "./context/auth-context";
import Padded from "./layout/padded";
import FlexCol from "./layout/flex-col";
import Card from "./layout/card";
import MainHeading from "./layout/main-heading";
import { AiFillHome, AiOutlineDatabase } from "react-icons/ai";
import { BsClipboard2Data, BsFillCartFill } from "react-icons/bs";
import SubHeading from "./layout/sub-heading";

export default function Home() {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const menu = [
    {
      url: "/",
      label: "Home",
      icon: <AiFillHome />,
      disabled: false,
    },
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
      disabled: true,
    },
    {
      url: "/reports",
      label: "Reports",
      icon: <BsClipboard2Data />,
      disabled: true,
    },
  ];

  return (
    <Padded>
      {loading ? (
        <div className="flex absolute inset-0 z-50 items-center justify-center bg-slate-800/95">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            borderColor="#fff"
            barColor="#aaa"
          />
        </div>
      ) : user ? (
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
          <div className="grid grid-cols-4 gap-4">
            {menu.map(function (menu, index) {
              return (
                <Link
                  key={index}
                  href={menu.url}
                  className={`h-auto p-4 rounded-xl flex items-center justify-center border-2 border-solid flex-col gap-2 ${
                    menu.disabled ? "bg-slate-200 border-slate-300 text-slate-300" : "border-slate-500  text-slate-700"
                  }`}
                >
                  <span className="text-2xl">{menu.icon}</span>
                  <span className="text-xs">{menu.label}</span>
                </Link>
              );
            })}
          </div>
          <Card>
            <SubHeading>Sales</SubHeading>
            <Padded>
              <div className="flex flex-col text-slate-700">
                <span>
                  Total Sales: <strong>23,240</strong>
                </span>
                <span>
                  Bottles Sold: <strong>87</strong>
                </span>
              </div>
            </Padded>
          </Card>
          <Card>
            <SubHeading>Expenses</SubHeading>
            <Padded>
              <div className="flex flex-col text-slate-700">
                <span>
                  Total Expenses: <strong>23,240</strong>
                </span>
              </div>
            </Padded>
          </Card>
        </FlexCol>
      ) : (
        <div>Please Login</div>
      )}
    </Padded>
  );
}
