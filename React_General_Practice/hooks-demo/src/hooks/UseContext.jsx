import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseContext = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return <div>useContext() demo</div>;
};

export default UseContext;
