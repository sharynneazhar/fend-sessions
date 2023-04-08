import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>
        <Link to='/'>FEND Session Resources</Link>
      </h1>
      <nav>
        <ul>
          <a
            href='https://sharynneazhar.github.io/udacity-fend-p2-blog-site/'
            target='_blank'
            rel='noreferrer'
          >
            Personal Blog Site Demo
          </a>
          <a
            href='https://udacity-shopping-cart-demo.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            Build a Shopping Cart Demo
          </a>
          <a
            href='https://sharynneazhar.github.io/fend-sessions/static/landing-page-demo.html'
            target='_blank'
            rel='noreferrer'
          >
            Landing Page Demo
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
