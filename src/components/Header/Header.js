import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>FEND Session Resources</h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
