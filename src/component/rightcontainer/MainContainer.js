import React, { useEffect } from "react";
import Buttonlist from "./Buttonlist";
import VideoContainer from "./VideoContainer";
import { Rtubeapi } from "../../utils/constants";

const MainContainer = () => {
  return (
    <div className="col-span-11 ">
      <Buttonlist />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
