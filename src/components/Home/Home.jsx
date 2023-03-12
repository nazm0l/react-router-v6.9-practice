import React from "react";
import fun from "../../assets/fun.png";

const Home = () => {
  return (
    <div>
      <h2>What i did in this simple project?</h2>
      <p>
        i used react-router-dom new version -v6.9.0 for routing and load data
        using their new feature called loader. I did dynamic route also. so this
        project all about learning react-router-dom new version.
      </p>
      <img src={fun} alt="" height="460px" width="460px" />
    </div>
  );
};

export default Home;
