import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Here we fetch some user from an api</h2>
      <div className="userCard">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
