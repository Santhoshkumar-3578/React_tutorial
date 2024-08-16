import React from "react";
import "../style/Basic.css";
import image from "../img/logo.png";

function Navbar() {
  return (
    <div className="basic-nav">
      <div className="nav">
        <div className="nav-logo">
          <img src={image} alt="logo.png" height="80px" />
        </div>
        <div className="nav-home">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">Service</a>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
