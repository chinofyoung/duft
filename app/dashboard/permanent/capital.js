import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../../layout/card";

export default function Capital() {
  return (
    <span className="flex flex-col bg-slate-50 p-2 rounded-md">
      {/* total capital from tagsa tagsa na aragmot */}
      Capital: <strong className="text-lg">₱23,202</strong>
    </span>
  );
}
