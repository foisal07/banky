import React from "react";
import classes from "./Home.module.css";
import TransactionForm from "./TransactionForm";

export default function Home() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>Transaction list</div>
        <div className={classes.sidebar}>
          <TransactionForm />
        </div>
      </div>
    </>
  );
}
