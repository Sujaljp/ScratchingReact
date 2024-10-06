import React from "react";
import ReactDOM from "react-dom/client";

// Introduction to React with simple element
const heading = React.createElement("h1", {}, "Helllo there ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//nested element along with siblings
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child1" }, "Hello there"),
  React.createElement("h2", { id: "child2" }, "This is a h2 "),
]);

console.log(parent);

//starting with JSX from now on
const jsxHeader = <h1 id="jsxHeader">Hello JSX</h1>;

const multiLineJSX = (
  <div>
    <h1 id="jsxHeader">Hello JSX</h1>
  </div>
);

console.log(jsxHeader);

//starting with components
const Title = () => <h1 id="jsxHeader">Hello JSX</h1>;

const HeadingComponent = () => (
    <div>
    <h1 id="componentHeader">Hello Component</h1>
    <Title />
  </div>
);



root.render(<HeadingComponent />);
