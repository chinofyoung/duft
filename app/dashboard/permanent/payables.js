import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../../layout/card";

export default function Payables() {
  return (
    <span className="flex flex-col bg-slate-200 p-2 rounded-md">
      {/* inutang pwede mag add hin utang*/}
      Payable: <strong className="text-lg">₱13,120</strong>
    </span>
  );
}
