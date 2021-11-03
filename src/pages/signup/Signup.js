import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <label>Name</label>
          <input
            type="password"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button type="submit">Login</button>
        </label>
      </form>
    </>
  );
}
