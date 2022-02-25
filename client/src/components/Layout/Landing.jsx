import React from 'react';

export const Landing = () => {
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>People Connector</h1>
          <p className='lead'>Create a profile, share posts and connect!</p>
          <div className='buttons'>
            <a href='signup.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
