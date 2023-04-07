import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className='contact-card'>
      <img
        src='https://avatars.githubusercontent.com/u/10108593?v=4'
        alt='profile'
      />
      <h2>Contact Me</h2>
      <a href='mailto:sharynneazhar@gmail.com' target='_blank' rel='noreferrer'>
        sharynneazhar@gmail.com
      </a>
      <div className='socials'>
        <a
          className='linkedin'
          href='https://www.linkedin.com/in/sharynneazhar/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
        <a
          className='github'
          href='https://github.com/sharynneazhar'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faGithubSquare} size='xl' />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
