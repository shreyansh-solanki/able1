import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/SignupStyle.css";

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (ev) => {
    name = ev.target.name;
    value = ev.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (ev) => {
    ev.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid data");
    } else {
      window.alert("Registered Successfully");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              required
            />
            <label>Phone number</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              required
            />
            <label>Confirm Password</label>
          </div>
          <button onClick={sendData}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
