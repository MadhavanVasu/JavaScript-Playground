import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  //   The useEffect hook in React is used to perform side effects, such as data fetching,
  //   subscriptions, or DOM manipulation, after the component has rendered.
  //   It is executed after the render cycle is complete, but before the component is updated
  //   or re-rendered again.
  useEffect(() => {
    console.log("Resource type changed to " + resourceType);
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
    </div>
  );
};

export const UseEffectDemo2 = () => {
  useEffect(() => {
    // Update document title
    document.title = "My App";

    // Set focus on input field
    document.getElementById("myInput").focus();
  }, []); // Empty dependency array to run effect only on mount

  return (
    <div>
      <input id="myInput" type="text" />
    </div>
  );
};

export default UseEffect;
