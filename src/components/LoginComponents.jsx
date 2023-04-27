import React, { useState } from "react";
import { LoginAPI , RegisterAPI } from "../api/AuthAPI";
import "../Sass/LoginComponents.scss";
import HeaderLoginComponents from "./HeaderLoginComponents";

export default function LoginComponents() {
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      console.log(res)
    } catch (err) {
        console.log(err)
    }
  };
  return (
    <div className="login-wrapper" >
      <HeaderLoginComponents/>
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
    </div>
  );
}
