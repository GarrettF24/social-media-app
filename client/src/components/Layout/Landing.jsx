import React from 'react';
import { Link } from 'react-router-dom';
export const Landing = () => {
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>People Connector</h1>
          <p className='lead'>Create a profile, share posts and connect!</p>
          <div className='buttons'>
            <Link to='/signup' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
