import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React Episode 2 - Igniting our App"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Can have only a single root.
// If we try to have more than one root we will get a warning.

// Warning: You are calling ReactDOMClient.createRoot()
// on a container that has already been passed to createRoot() before.
// Instead, call root.render() on the existing root instead if you want to update it.

// Parcel
// npx parcel index.html -> To start development server
// npx parcel build index.html -> To do production build
// npx parcel index.html --https -> To start https dev server (OOB feature)
