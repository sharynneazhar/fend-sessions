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
            href="https://sharynneazhar.github.io/fend-sessions/static/pixel-art-demo.html"
            target="_blank"
            rel="noreferrer"
          >
            Pixel Art Maker Demo
          </a>
          <a
            href="https://sharynneazhar.github.io/fend-sessions/static/landing-page-demo.html"
            target="_blank"
            rel="noreferrer"
          >
            Landing Page Demo
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
