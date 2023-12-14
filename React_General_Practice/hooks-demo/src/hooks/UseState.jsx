import React, { useState } from "react";

export const UseState = () => {
  // Why const for state?
  // Here, React calls the component function again when setCount is called to re-render.
  // Thus, the constant declared is actually a new JS variable in the function scope.
  // Because const prevents reassignment and we don't want to manipulate state directly by reassigning it.
  // We want to call the setter function to update state instead.
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Two times calling count+1 increments currValue+1. So it overrides, it increases only once
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>
        <button onClick={decrementCount}>-</button>
        {count}
        <button onClick={incrementCount}>+</button>
      </p>
    </div>
  );
};
