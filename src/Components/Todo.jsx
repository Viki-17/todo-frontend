import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import classes from "../Components/Todo.module.css";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? `${classes["todo-row"]} ${classes.complete}`
          : classes["todo-row"]
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className={classes.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className={classes["delete-icon"]}
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={classes["edit-icon"]}
        />
      </div>
    </div>
  ));
};

export default Todo;
