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
          <a
            href="https://github.com/sharynneazhar/fend-sessions"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
