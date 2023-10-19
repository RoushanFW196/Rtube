
import React from "react";

 export const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <img
        draggable="false"
        alt="Avatar image"
        style={{ width: "37px", height: "37px" }}
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
      />
     <span>{name}</span>
     <span>{message}</span>
    </div>
  );
};


