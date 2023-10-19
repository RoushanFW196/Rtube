import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Rtubeapi } from "../../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Rtubeapi);
    const respdata = await data.json();

    setVideos(respdata.items);
  };

  return (
    <div
      className={
        isMenuOpen ? "grid grid-cols-3 gap-4" : "grid grid-cols-4 gap-4"
      }
    >
      {videos.map((video) => (
       <Link to={'watch?v='+video.id} key={video.id}><VideoCard  info={{ ...video }} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
