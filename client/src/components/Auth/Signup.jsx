import React, { useState } from 'react';
import axios from 'axios';

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
    if (password !== passwordConfirm) console.log('Password do not match');
    //   const newUser = { name, email, password };
    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     };
    //     const body = JSON.stringify(newUser);
    //     const res = await axios.post('/api/users', body, config);
    //     console.log(res.data);
    //   } catch (error) {
    //     console.error(error.response.data);
    //   }
    // }
    console.log('success');
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
        <a href='login.html'> Login</a>
      </p>
    </div>
  );
};
