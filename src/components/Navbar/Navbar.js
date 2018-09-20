import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">

      <div> <p>Top score: {props.topScore}</p> </div>
      <div> <p>Current score: {props.currentScore}</p>  </div>


    </nav>
);

export default Navbar