import React from "react";
import SideNav from "../leftcontainer/SideNav";
import MainContainer from "../rightcontainer/MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideNav />
      <MainContainer />
    </div>
  );
};

export default Body;
