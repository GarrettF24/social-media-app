import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/auth/auth.actions';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='nav-links'>
      <li>
        <Link onClick={logout} to='/' className='nav-anchors'>
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
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
  );
  return (
    <div className='navbar bg-dark'>
      <h2>
        <Link className='nav-anchors' to='/'>
          <i className='fa-solid fa-users'></i>SocialMedia App
        </Link>
      </h2>
      {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Navbar);
