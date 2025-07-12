import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";


const Body = () => {
  
  return (
    <div className="body flex h-[93vh]">
      <SideBar />
      <Outlet />
      
    </div>
  );
};

export default Body;
