import React from "react";
import "./../styles/NavbarStyle.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-nav">
        <div className="nav-logo">
          <div className="nav-logo-circle"></div>
          <div className="nav-logo-circle"></div>
          <div className="nav-logo-circle"></div>
          <div className="nav-title">Able</div>
        </div>
        <div>
          <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/signup">SIGNUP</NavLink>
            <div id="indicator"></div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
