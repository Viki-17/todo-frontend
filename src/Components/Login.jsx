import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Components/Login.module.css";

function Login() {
  return (
    <>
      <section className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["column-left"]}>
            <h1 className={classes.heading}>Login To Tick In</h1>
            <form action="">
              <label htmlFor="">Email</label>
              <input type="text" />
              <label htmlFor="">Password</label>
              <input type="password" />
            </form>
            <NavLink to="/todo">
              <button>Login</button>
            </NavLink>
          </div>
          <div className={classes["column-right"]}>
            <img
              src="src/assets/login.svg"
              alt="illustrator"
              className={classes["main-image"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
