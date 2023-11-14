"use client";
import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { UserAuth } from "./context/auth-context";
import { SalesContextProvider } from "./context/sales-context";
import Padded from "./layout/padded";
import FlexCol from "./layout/flex-col";
import Card from "./layout/card";
import Stats from "./dashboard/stats";
import PermanentStats from "./dashboard/permanent-stats";
import LargeLinks from "./dashboard/large-links";
import SmallLinks from "./dashboard/small-links";

export default function Home() {
  const { user } = UserAuth();

  return (
    <>
      <Padded>
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
      </Padded>
      <Padded>
        <FlexCol>
          <LargeLinks />
          <SmallLinks />
        </FlexCol>
      </Padded>
      <PermanentStats />
      <SalesContextProvider>
        <Stats />
      </SalesContextProvider>
    </>
  );
}
