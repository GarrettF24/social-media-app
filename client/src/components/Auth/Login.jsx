import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('success');
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>
        Login to your account.
      </p>
      <form onSubmit={handleSubmit} className='form'>
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
        <input type='submit' value='Login' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Not Signed up?
        <Link to='/signup'> Sign up</Link>
      </p>
    </div>
  );
};
