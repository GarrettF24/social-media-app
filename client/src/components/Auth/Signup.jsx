import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log('Password do not match');
    } else {
      console.log('success');
    }
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>
        Create Account
      </p>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <input
            className='form-inputs'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleChange}
            required
            autoComplete='username'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-inputs'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-inputs'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
            autoComplete='new-password'
            minLength={6}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-inputs'
            type='password'
            placeholder='Confirm Password'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={handleChange}
            autoComplete='new-password'
            minLength={6}
          />
        </div>
        <input type='submit' value='Sign up' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already a User?
        <Link to='/login'> Login</Link>
      </p>
    </div>
  );
};
