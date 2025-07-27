import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";


const Body = () => {
  
  return (
    <div className="body flex h-[93vh]">
      <SideBar />
      <div className="right-section box-border h-full w-3/4 border border-[rgba(255,255,255,0.3)] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
