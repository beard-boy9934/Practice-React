import React from "react";
import ReactDOM from "react-dom/client";

const hello = "Hello!";
const heading = (
  <h1 className="heading" tabIndex="1">
    {hello} Beard_Boy
  </h1>
);
const HeadingComponent2 = () => <h1>Hello! Functional Component2</h1>;
const HeadingComponent1 = () => {
  return (
    <>
      <h1>Hello! Functional Component1</h1>
      {/*Way1*/}{HeadingComponent2()}
      {/*Way2*/}<HeadingComponent2></HeadingComponent2>
      {/*Way3*/}<HeadingComponent2 />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);
