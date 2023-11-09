import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../../layout/card";

export default function Earnings() {
  return (
    <span className="flex flex-col bg-slate-50 p-2 rounded-md">
      {/* sales - cost of sales - expenses */}
      Retained Earnings: <strong className="text-lg">₱0</strong>
    </span>
  );
}
