import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";


const Body = () => {
  
  return (
    <div className="body">
      <SideBar />
      <Outlet />
      
    </div>
  );
};

export default Body;
