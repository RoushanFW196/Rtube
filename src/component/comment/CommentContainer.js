import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";
import { CommentListdata } from "../../utils/constants";
const CommentContainer = () => {
  return (
    <div className="w-7/12  mx-24 my-5 px-4">
      <CommentList CommentListdata={CommentListdata} />
    </div>
  );
};

export default CommentContainer;
