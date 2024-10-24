import React from "react";
import Dashboard from "./Dashboard";
import SideBar from "./Sidebar";


const Body = () => {
  return (
    <div className="body">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default Body;
