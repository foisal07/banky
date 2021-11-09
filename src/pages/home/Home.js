import React from "react";
import classes from "./Home.module.css";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>Transaction list</div>
        <div className={classes.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </>
  );
}
