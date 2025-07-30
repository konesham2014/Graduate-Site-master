import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src="/logo192.png"
          alt="Logo"
          className="footer-logo"
          width={100}
        />
      </div>
      <div className="footer-center">
        <p>© 2025 FutureBridge. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="/#privacy">Privacy Policy</a>
        <a href="/#terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
