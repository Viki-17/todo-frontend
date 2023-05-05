import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import classes from "../Components/Home.module.css";
function Home() {
  return (
    <>
      <section className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["column-left"]}>
            <h1 className={classes.heading}>Keep Up To Your Tasks</h1>
            <p>
              Join millions of people to capture ideas, organize life, and do
              something creative everyday.
            </p>
            <Link to="signup">
              <button>Get Started</button>
            </Link>
          </div>
          <div className={classes["column-right"]}>
            <img
              src="src/assets/undraw_reminder_re_fe15.svg"
              alt="illustrator"
              className={classes["main-image"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
