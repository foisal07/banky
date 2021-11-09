import React from "react";
import classes from "./Home.module.css";

import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";

import { useAuthContext } from "../../hooks/useAuthContext";
import useCollections from "../../hooks/useCollections";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollections("transactions", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <TransactionsList transactions={documents} error={error} />
        </div>
        <div className={classes.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </>
  );
}
