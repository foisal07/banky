import React from "react";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { error, isLoading, signup } = useSignup(email, password, name);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        {!isLoading && <button type="submit">Login</button>}
        {error && <p>`${error.message}`</p>}
        {isLoading && <button type="submit">Loading</button>}
      </form>
    </>
  );
}
