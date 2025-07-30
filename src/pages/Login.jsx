import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="login-form-container">
          <h2>Login</h2>
          <form className="login-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <div className="login-links">
              <Link to="#">Forgot Password?</Link>
              <span> | </span>
              <Link to="/register">Don't have an account? Sign up</Link>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src="/logo192.png" alt="FutureBridge" width={300} />x
        </div>
      </div>
    </>
  );
};

export default Login;
