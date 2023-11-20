"use client";
import { createContext, useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export const SalesContext = createContext({
  sales: {},
});

export const SalesContextProvider = ({ children }) => {
  const [sales, setSales] = useState([]);
  let date = new Date();
  var today = new Date();
  var yesterday = new Date(date.setDate(today.getDate() - 1));


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

  // read paid
  const paid = sales.filter((sales) => sales.cash === true);

  // // default read
  // useEffect(() => {
  //   showToday();
  // }, []);

  // // read today's sales
  // const showToday = () => {
  //   const q = query(
  //     collection(db, "sales"),
  //     where("createdAt", ">", yesterday)
  //   );

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let salesArr = [];

  //     querySnapshot.forEach((doc) => {
  //       salesArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setSales(salesArr);
  //     return () => unsubscribe();
  //   });
  // };

  // // read this month's sales
  // const showMonth = () => {
  //   const q = query(collection(db, "sales"), where("createdAt", "<", today));

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let salesArr = [];

  //     querySnapshot.forEach((doc) => {
  //       salesArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setSales(salesArr);
  //     return () => unsubscribe();
  //   });
  // };

  return (
    <SalesContext.Provider
      value={{
        sales,
        paid,
        // showMonth,
        // showToday,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
