import React from "react";
import "./user.css";

const User = (props) => {
  console.log(props);
  const { name, email, website } = props.user;

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <small>Website: {website}</small>
    </div>
  );
};

export default User;
