import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "../Components/Header.module.css";
import Home from "./Home";
function Header() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <div className={classes.logo}>TODO</div>
        </NavLink>
        <div className="nav-items">
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink> */}
          <NavLink to="login">Login</NavLink>
        </div>
      </nav>
      {/* <main> */}
      <Outlet />
      {/* </main> */}
    </>
  );
}

export default Header;
