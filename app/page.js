"use client";
import React, { useEffect } from "react";
import { UserAuth } from "./context/auth-context";
import Padded from "./layout/padded";
import FlexCol from "./layout/flex-col";
import Card from "./layout/card";
import Stats from "./dashboard/stats";
import PermanentStats from "./dashboard/permanent-stats";
import LargeLinks from "./dashboard/large-links";
import SmallLinks from "./dashboard/small-links";
import Login from "./components/login";

export default function Home() {
  const { user } = UserAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
      {user ? (
        <>
          <Padded>
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
              <PermanentStats />
              <LargeLinks />
              <SmallLinks />
            </FlexCol>
          </Padded>
          <Stats />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
