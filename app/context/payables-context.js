"use client";
import { createContext, useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const PayablesContext = createContext({
  payables: {},
});

export const PayablesContextProvider = ({ children }) => {
  const [payables, setPayables] = useState([]);

  // read payables from database
  useEffect(() => {
    const q = query(collection(db, "payables"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let payablesArr = [];

      querySnapshot.forEach((doc) => {
        payablesArr.push({ ...doc.data(), id: doc.id });
      });
      setPayables(payablesArr);
      return () => unsubscribe();
    });
  }, []);

  return (
    <PayablesContext.Provider
      value={{
        payables,
      }}
    >
      {children}
    </PayablesContext.Provider>
  );
};
