import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Card from "../layout/card";
import FlexCol from "../layout/flex-col";
import SubHeading from "../layout/sub-heading";
import Inventory from "./permanent/inventory";
import Payables from "./permanent/payables";
import Earnings from "./permanent/earnings";
import Capital from "./permanent/capital";
import Receivables from "./permanent/receivable";
import Cash from "./permanent/cash";

export default function PermanentStats() {
  return (
    <Card>
      <FlexCol>
        <SubHeading>Permanent Accounts</SubHeading>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <Cash />
          <Receivables />
          <Capital />
          <Earnings />
          <Payables />
          <Inventory />
        </div>
      </FlexCol>
    </Card>
  );
}
