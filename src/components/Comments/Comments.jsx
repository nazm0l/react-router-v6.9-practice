import React from "react";
import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import "./comments.css";

const Comments = () => {
  const comments = useLoaderData();

  return (
    <div>
      <h2>Here we fetch some comments</h2>
      <div className="commentCard">
        {comments.slice(450).map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
