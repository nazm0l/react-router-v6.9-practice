import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = (props) => {
  console.log(props);
  const { name, email, website, id } = props.user;

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <small>Website: {website}</small>
      <p>
        <Link to={`/users/${id}`}>View Details</Link>
      </p>
    </div>
  );
};

export default User;
