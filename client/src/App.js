import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Layout/Navbar';
import { Landing } from './components/Layout/Landing';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
