import React from "react";
import SideNav from "../leftcontainer/SideNav";
import MainContainer from "../rightcontainer/MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideNav />
      <Outlet/>
    </div>
  );
};

export default Body;
