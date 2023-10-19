import React from "react";

export const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex m-3 px-2 items-start hover:bg-slate-200 hover:rounded-lg w-full ">
      <img
        draggable="false"
        alt="Avatar image"
        className="w-6 h-6 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
      />
      <span className="font-bold mx-2">{name}</span>
      <span className="text-xs text-justify w-64 ">{message}</span>
    </div>
  );
};
