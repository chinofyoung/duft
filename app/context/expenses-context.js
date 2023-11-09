"use client";
import { createContext, useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const ExpensesContext = createContext({
  expenses: {},
});

export const ExpensesContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // read expenses from database
  useEffect(() => {
    const q = query(collection(db, "expenses"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expenseArr = [];

      querySnapshot.forEach((doc) => {
        expenseArr.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expenseArr);
      return () => unsubscribe();
    });
  }, []);

  const pending = expenses.filter(
    (expense) => expense.approvedT === false || expense.approvedP === false
  );

  const approved = expenses.filter(
    (expense) => expense.approvedT === true && expense.approvedP === true
  );

  return (
    <ExpensesContext.Provider
      value={{
        pending,
        approved,
        expenses,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
