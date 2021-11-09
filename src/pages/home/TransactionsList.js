import React from "react";
import classes from "./Home.module.css";

export default function TransactionsList({ transactions }) {
  return (
    <ul className={classes.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={classes.name}>{transaction.name}</p>
          <p className={classes.amount}>${transaction.amount}</p>
        </li>
      ))}
    </ul>
  );
}
