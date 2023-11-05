import React from "react";

export default function Button({ ...props }) {
  return (
    <button
      className={`rounded-md text-white text-center text-xs 
      ${props.secondary ? "bg-slate-400" : "bg-red-500"} 
      ${props.small ? "px-4 py-1.5" : "px-5 py-2.5"} 
      ${props.styles}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
