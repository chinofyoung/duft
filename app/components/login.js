"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/auth-context";
import { FcGoogle } from "react-icons/fc";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const { user, googleSignIn } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="bg-slate-800 absolute inset-0 z-50 flex flex-col items-center justify-center p-8 gap-12">
      <img src="/static/logo.png" />
      <div className="">
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : !user ? (
          <button
            onClick={handleSignIn}
            className="bg-white text-sm px-8 py-4 text-slate-800 font-bold rounded-md flex items-center gap-2"
          >
            Sign in with Google
            <FcGoogle className="text-xl" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
