import React, { useContext, useReducer, useState } from "react";
import todoReducer from "../reducer/todoReducer";
import { Todo } from "../components/Todo";
import { ADD_TODO, DECREMENT, INCREMENT } from "../constants/ActionTypes";
import { CountContext } from "../context/CountContext";

export const UseReducer = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: { name: name } });
  };

  return (
    <div>
      UseReducer
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

// Example 2 -> useContext() and useReducer()
// Using same reducer in 2 different components
export const FirstComponent = () => {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <p>First Counter</p>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        +
      </button>
    </div>
  );
};

export const SecondComponent = () => {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <p>Second Counter</p>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        +
      </button>
    </div>
  );
};
