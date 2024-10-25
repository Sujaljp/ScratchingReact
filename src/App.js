import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";

//Low level design of ui
// Header
// - logo
// - navigation
//      search
//      Playlist
// Body
// Footer



const AppLayout = () => {
  console.log("hi")
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
