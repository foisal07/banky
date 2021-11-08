import React from "react";
import { useState } from "react";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAmount("");
    console.log({
      name,
      amount,
    });
  };

  return (
    <>
      <h3>Add A Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount:</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
