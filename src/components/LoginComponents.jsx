import React, { useState } from "react";
import { LoginAPI, RegisterAPI } from "../api/AuthAPI";
import "../Sass/LoginComponents.scss";
import ImgLogin from "../assets/ImgLogin.svg";

export default function LoginComponents() {
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-wrapper-inner">
        <h1 className="heading">Welcome to your professional community</h1>
        <div className="auth-inputs">
          <div className="email">
            <div className="input-title">Email or phone</div>
            <input
              onChange={(event) =>
                setCredentials({ ...credentails, email: event.target.value })
              }
              type="email"
              className="common-input"
              placeholder="Email or Phone"
            />
          </div>
          <div className="password">
            <div className="input-title">Password</div>

            <input
              onChange={(event) =>
                setCredentials({
                  ...credentails,
                  password: event.target.value,
                })
              }
              type="password"
              className="common-input"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="forgot-password" >
          Forgot password ?
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <img src={ImgLogin} className="img-login" alt="img login" />
    </div>
  );
}
