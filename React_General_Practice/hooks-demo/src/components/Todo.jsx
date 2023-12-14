import React from "react";
import { DELETE_TODO, TOGGLE_TODO } from "../constants/ActionTypes";

export const Todo = (props) => {
  const { todo, dispatch } = props;

  const handleDelete = () => {
    dispatch({ type: DELETE_TODO, payload: { id: todo.id } });
  };

  const todoStyle = {
    color: todo.complete ? "#808080" : "#000000",
  };

  return (
    <div>
      <span style={todoStyle}>{todo.name}</span>
      <button
        onClick={() => {
          dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
