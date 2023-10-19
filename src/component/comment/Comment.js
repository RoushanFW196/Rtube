import React from "react";

const Comment = ({ comment }) => {
  const { name, text } = comment;

  return (
    <div className="flex my-4 bg-gray-100 p-2">
      <img
        src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
        alt="no Img"
        className="w-11 h-10 mx-3"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
