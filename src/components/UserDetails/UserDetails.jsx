import React from "react";
import { useLoaderData } from "react-router-dom";
import "./userDetails.css";

const UserDetails = () => {
  const userData = useLoaderData();

  return (
    <div>
      <h2>User Details</h2>
      <p>{userData.name}</p>
    </div>
  );
};

export default UserDetails;
