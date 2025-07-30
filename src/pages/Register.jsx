import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register-page">
        <div className="register-form-container">
          <h2>Create Account</h2>
          <form className="register-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
            <div className="register-links">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src="/logo192.png" alt="FutureBridge" width={300} />
        </div>
      </div>
    </>
  );
};

export default Register;
