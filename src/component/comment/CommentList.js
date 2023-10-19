import React from "react";

import Comment from "./Comment";

const CommentList = ({ CommentListdata }) => {
  return CommentListdata.map((comment, index) => {
    if (!comment["text"]) return;
    return (
      <div key={index} style={{ borderLeft: "1px solid gray" }}>
        <Comment comment={comment} />
        <div className="px-8">
          <CommentList CommentListdata={comment?.replies} />
        </div>
      </div>
    );
  });
};

export default CommentList;
