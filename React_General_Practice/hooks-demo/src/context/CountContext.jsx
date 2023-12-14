import React, { createContext, useReducer } from "react";
import countReducer from "../reducer/countReducer";

export const CountContext = createContext();

export const CountContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
