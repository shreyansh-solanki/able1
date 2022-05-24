import React, { useState } from "react";
import "./../styles/AboutStyle.css";

const About = () => {
  const [isUserData, setUserData] = useState();
  return (
    <>
      <div className="about-box">
        <h2>About</h2>
        <form>
          <div className="user-box">
            <label>Username</label>
          </div>
          <div className="user-box">
            <label>Email</label>
          </div>
          <div className="user-box">
            <label>Phone number</label>
          </div>
          <div className="user-box">
            <label>Job Role</label>
          </div>
          <div className="user-box">
            <label>Job Description</label>
          </div>
          <div className="user-box">
            <label>Place of Work</label>
          </div>
          {/* <button>Submit</button> */}
        </form>
      </div>
    </>
  );
};

export default About;
