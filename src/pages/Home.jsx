import React from "react";
const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-content">
          <h1>Welcome to FutureBridge</h1>
          <p>
            A graduate student networking platform designed to help you connect,
            collaborate, and grow. Join events, share resources, and expand your
            professional circle.
          </p>
          <button className="home-btn">Get Started</button>
        </div>
        <div className="home-image">
          <img src="/logo192.png" alt="FutureBridge Logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
