import React from "react";
import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
const { Meta } = Card;
const VideoCard = ({ info }) => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
   
  return (
    <Card
      hoverable={true}
      style={{
        width: isMenuOpen?400:300,
        marginTop: 16,
      }}
      cover={
        <img
          alt="example"
          style={{
         
           width:'full',
            height: info?.snippet?.thumbnails?.medium?.height,
          }}
          src={info?.snippet?.thumbnails?.medium?.url}
        />
      }
      loading={false}
    >
      <div className="flex align-top">
        <img
          className="w-11 h-11 border rounded-full mr-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXOdUM5rLXW_aLA2ZRQ_Y79n899uSS3Em5zSiyLBPcA&s"
        />

        <h2 className="font-bold text-base text-neutral-800">
          {info?.snippet?.title}
        </h2>
      </div>
      <div className="flex">
        <div className="w-11 h-11  mr-3"></div>

        <div>
          <p className="text-xs text-neutral-500">
            {info?.snippet?.channelTitle}
          </p>
          <div>
            <span className="text-neutral-500">
              {(info?.statistics?.viewCount / 1000000).toFixed(1)}M {"  "}{" "}
              views.
            </span>
            <span className="text-neutral-500">10 month ago</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
