import React from "react";
import { Link, Router } from "react-router-dom";
import useLogout from '../hooks/useLogout'

// styles
import classes from "./Navbar.module.css";

export default function Navbar() {
  const {logout} = useLogout()
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.title}>Banky</li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <button className="btn" onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
