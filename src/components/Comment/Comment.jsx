import React from "react";
import "./comment.css";

const Comment = (props) => {
  const { name, body } = props.comment;

  return (
    <div className="comment">
      <small>{body}</small>
      <p>UserName: {name}</p>
    </div>
  );
};

export default Comment;
