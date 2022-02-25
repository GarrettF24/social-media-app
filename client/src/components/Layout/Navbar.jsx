import React from 'react';

export const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
      <h2>
        <a className='nav-anchors' href='dashboard.html'>
          <i className='fa-solid fa-users'></i>SocialMedia App
        </a>
      </h2>
      <ul className='nav-links'>
        <li>
          {' '}
          <a className='nav-anchors' href='profiles.html'>
            People
          </a>
        </li>
        <li>
          <a className='nav-anchors' href='signup.html'>
            Sign Up
          </a>
        </li>
        <li>
          <a className='nav-anchors' href='login.html'>
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};
