import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/ErrorpageStyle.css";

const Errorpage = () => {
  return (
    <>
      <div className="error-page">
        <p>
          <h1>404</h1>
        </p>
        <p>
          <h2>Page Not Found</h2>
        </p>
        <p>
          <NavLink to="/">Back To Home Page</NavLink>
        </p>
      </div>
    </>
  );
};

export default Errorpage;
