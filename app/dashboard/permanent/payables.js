import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Payables() {
  const [payables, setPayables] = useState({ payables: 12000 });

  return (
    <span className="flex w-full flex-col justify-between bg-slate-50 p-2 rounded-md">
      {/* inutang pwede mag add hin utang*/}
      <span className="flex flex-col">
        Payables: <strong className="text-lg">₱12,000</strong>
      </span>
      <Link
        className="underline w-full flex items-center gap-1"
        href="/payables"
      >
        <span className="">See Payables</span> <BsArrowRight />
      </Link>
    </span>
  );
}