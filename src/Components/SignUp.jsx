import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "../Components/SignUp.module.css";

function SignUp() {
  return (
    <>
      <section className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["column-left"]}>
            <h1 className={classes.heading}>SignUp To Organize Everything</h1>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="text" />
              <label htmlFor="">Password</label>
              <input type="password" />
            </form>
            <NavLink to="/login">
              <button>SignUp</button>
            </NavLink>
          </div>
          <div className={classes["column-right"]}>
            <img
              src="./src/assets/signup.svg"
              alt="illustrator"
              className={classes["main-image"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
