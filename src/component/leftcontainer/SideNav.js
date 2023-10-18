import { Divider } from "antd";
import React from "react";

const SideNav = () => {
  return (
    <div className="col-span-1 bg-slate-300 h-auto">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
  <Divider/>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
  <Divider/>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li> Learning</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
      <Divider />
      <ul>
        <h3>More From RTube</h3>
        <li>RTube Premium</li>
        <li>RTube Music</li>
        <li>RTube Kids</li>
      </ul>
      <Divider/>


      <ul>
        <h3>Settings</h3>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
      <Divider/>










    </div>
  );
};

export default SideNav;
