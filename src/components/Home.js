import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/HomeStyle.css";

const Home = () => {
  return (
    <>
      <div className="add-box">
        <div type="text" name="name" />
        <NavLink to="/about">+</NavLink>
      </div>
    </>
  );
};

export default Home;
