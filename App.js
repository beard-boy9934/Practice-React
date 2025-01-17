import React from "react";
import ReactDOM from 'react-dom/client'; 
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello From h1 Child"),
    React.createElement("h2", {}, "Hello From h2 Child"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello From h1 Child"),
    React.createElement("h2", {}, "Hello From h2 Child"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
