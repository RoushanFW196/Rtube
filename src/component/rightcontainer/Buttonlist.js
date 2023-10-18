import React from "react";
import { Button } from "antd";
const btnarr = [
  "All",
  "Computer Programing",
  "News",
  "Sport",
  "Stock",
  "Product",
  "Music",
  "sales",
  "Osho",
  "Books",
  "Live",
  "Indian idol",
  "Arijith Singh",
  "Sachin Tendulkar",
  "Thoughts",
  "Gadgets",
  "Recently Uploaded",
];

const Buttonlist = () => {
  return (
    <div>
      {btnarr.map((el, index) => (
        <button
          className={index==0?'bg-black text-white m-2 p-2 rounded-lg':'bg-gray-200 hover:bg-gray-500 m-2 p-2 rounded-lg'}
          key={index}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Buttonlist;
