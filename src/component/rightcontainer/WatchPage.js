import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/menuslice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../comment/CommentContainer";
import LiveChat from "../livechat/LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();

  let videoid = searchparams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="col-span-11 rounded-lg">
        <div className="w-8/12">
          <iframe
           
            style={{paddingLeft:'100px',paddingTop:'10px',width:'825px',height:'407px'}}
            src={"https://www.youtube.com/embed/" + videoid}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <LiveChat/>
        </div>
      </div>

      <CommentContainer /> 
    </div>
  );
};

export default WatchPage;
