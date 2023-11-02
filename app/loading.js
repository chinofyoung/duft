"use client";
import { ProgressBar } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex absolute inset-0 z-50 items-center justify-center bg-slate-800">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        borderColor="#fff"
        barColor="#aaa"
      />
    </div>
  );
}
