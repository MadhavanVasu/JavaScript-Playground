import React, { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const bgStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  // const square = findSquare(count);
  const square = useMemo(() => {
    return findSquare(count);
  }, [count]);

  function findSquare(count) {
    for (let i = 0; i < 1000000000; i++);
    return count * 2;
  }

  return (
    <div>
      UseMemo
      <br />
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <br />
      <button onClick={() => setDark(!dark)}>Change theme</button>
      <p style={bgStyle}>{square}</p>
    </div>
  );
};
