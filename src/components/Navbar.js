import React from "react";
import { Link, Router } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
import classes from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  console.log(user);
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.title}>Banky</li>

        {!user && (
          <>
            {" "}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hello, {user.displayName}</li>

            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
