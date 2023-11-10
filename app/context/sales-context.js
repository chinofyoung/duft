"use client";
import { createContext, useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const SalesContext = createContext({
  sales: {},
});

export const SalesContextProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  // read sales from database
  useEffect(() => {
    const q = query(collection(db, "sales"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let salesArr = [];

      querySnapshot.forEach((doc) => {
        salesArr.push({ ...doc.data(), id: doc.id });
      });
      setSales(salesArr);
      return () => unsubscribe();
    });
  }, []);

  const paid = sales.filter((sales) => sales.cash === true);

  return (
    <SalesContext.Provider
      value={{
        sales,
        paid,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
