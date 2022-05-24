import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/LoginStyle.css";

const Login = () => {
  let navigate = useNavigate();

  const [email, isEmail] = useState("");
  const [password, isPassword] = useState("");

  const loginUser = async (ev) => {
    ev.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      console.log("Invalid data");
    } else {
      //   window.alert("Login Successfully");
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form method="POST">
          <div className="user-box">
            <input
              type="text"
              name=""
              value={email}
              onChange={(ev) => isEmail(ev.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              value={password}
              onChange={(ev) => isPassword(ev.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button onClick={loginUser}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
