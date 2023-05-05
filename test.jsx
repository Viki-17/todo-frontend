import React, { useState } from "react";
import classes from "../Components/Todo.module.css";
function Todo() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    setTodo((prevState) => {
      return [
        ...prevState,
        {
          id: crypto.randomUUID(),
          title: item,
          completed: false,
        },
      ];
    });
    setItem("");
  }

  function deleteHandler(id) {
    setTodo((prevState) => {
      return prevState.filter((val) => val.id != id);
    });
  }
  function updateHandler(id) {
    setTodo((prevState) => {
      return prevState.map((val) => (val.id === id ? item : val));
    });
  }
  return (
    <>
      <div className={classes.container}>
        <h1>What's The Plan For The Day?</h1>
        {todo.map((val) => {
          return (
            <li key={val.id} className={classes.list}>
              <label htmlFor="">
                <input type="checkbox" />
                {val.title}
              </label>
              <button
                className={classes.btn}
                onClick={() => deleteHandler(val.id)}
              >
                Delete
              </button>
              <button
                className={classes.btn}
                onClick={() => updateHandler(val.id)}
              >
                Update
              </button>
            </li>
          );
        })}
        <form className={classes.taskfield} action="" onSubmit={submitHandler}>
          <label htmlFor="item">New ToDo</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          ></input>
          <button className={classes.btn}>Add</button>
        </form>
      </div>
    </>
  );
}

export default Todo;
