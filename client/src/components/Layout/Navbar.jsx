import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
      <h2>
        <Link className='nav-anchors' to='/'>
          <i className='fa-solid fa-users'></i>SocialMedia App
        </Link>
      </h2>
      <ul className='nav-links'>
        <li>
          <Link to='/' className='nav-anchors'>
            People
          </Link>
        </li>
        <li>
          <Link to='/signup' className='nav-anchors'>
            Sign Up
          </Link>
        </li>
        <li>
          <Link to='/login' className='nav-anchors'>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
