import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Component/BottomNav/NavigationBar";

export default function DefaultLayout() {
  return (


    <div className="lg:flex w-full block lg:relative">
      

      <div className="lg:w-[17%] lg:fixed">
        <NavigationBar />
      </div>

      <div className="lg:w-[80%] lg:p-4 lg:ml-auto">
         <Outlet />
      </div>
      
     
    </div>
      
  
  );
}
