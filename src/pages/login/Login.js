import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes["login-form"]}>
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

        {!isLoading && (
          <button type="submit" className="btn">
            Login
          </button>
        )}

        {isLoading && (
          <button type="submit" className="btn" disabled>
            Logging In..
          </button>
        )}

        {error && <p>{error}</p>}
      </form>
    </>
  );
}
