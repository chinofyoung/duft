"use client";
import { createContext, useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const ItemsContext = createContext({
  items: {},
});

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // read items from database
  useEffect(() => {
    const q = query(collection(db, "items"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
      return () => unsubscribe();
    });
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
