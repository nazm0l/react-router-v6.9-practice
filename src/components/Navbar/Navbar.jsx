import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="menu">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/comments">Comments</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
