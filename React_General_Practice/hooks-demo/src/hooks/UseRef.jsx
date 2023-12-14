import React, { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const prevState = useRef("");

  const [name, setName] = useState("");

  useEffect(() => {
    prevState.current = name;
  }, [name]);

  // Event handlers
  // onClick={myFunc}: In this syntax, myFunc is passed as a callback function to the onClick event.
  // This means that myFunc is not executed immediately when the component renders,
  // but rather it is passed as a reference to the function that should be
  // called when the onClick event is triggered.
  // This is the correct way to pass a callback function to an event handler in React.

  // onClick={myFunc()} : Executed immediately when the component renders.

  const myFunc = () => {
    console.log(prevState.current);
  };

  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <div>Previous state is {prevState.current}</div>
      <button onClick={myFunc}>Click me</button>
    </div>
  );
};
