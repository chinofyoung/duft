import React, { useState, useEffect } from "react";

export default function Payables() {
  const [payables, setPayables] = useState({ payables: 12000 });

  return (
    <span className="flex flex-col bg-slate-50 p-2 rounded-md">
      {/* inutang pwede mag add hin utang*/}
      Payable: <strong className="text-lg">₱12,000</strong>
    </span>
  );
}