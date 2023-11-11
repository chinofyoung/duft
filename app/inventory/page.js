"use client";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import Button from "../layout/button";

export default function Page() {
  let date = new Date();
  var today = new Date();
  var yesterday = new Date(date.setDate(today.getDate() - 1));
  const [expenses, setExpenses] = useState([]);

  // read expenses from database
  useEffect(() => {
    showToday();
  }, []);

  // read today's expenses
  const showToday = () => {
    const q = query(
      collection(db, "expenses"),
      where("createdAt", "<", today),
      where("createdAt", ">", yesterday)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expenseArr = [];

      querySnapshot.forEach((doc) => {
        expenseArr.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expenseArr);
      return () => unsubscribe();
    });
  };

  // read this month's expenses
  const showMonth = () => {
    const q = query(
      collection(db, "expenses"),
      where("createdAt", "<", yesterday)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expenseArr = [];

      querySnapshot.forEach((doc) => {
        expenseArr.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expenseArr);
      return () => unsubscribe();
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <Button onClick={showToday} label="today" />
        <Button onClick={showMonth} secondary label="month" />
      </div>
      {expenses.map((expense, index) => (
        <span key={index}>{expense.name}</span>
      ))}
    </div>
  );
}
