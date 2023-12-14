import React from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

export default function todoReducer(todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, createTodo(action.payload.name)];

    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, complete: !todo.complete };
        return todo;
      });

    case DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

const createTodo = (name) => {
  return { name: name, id: uuidv4(), complete: false };
};
