import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Layout/Navbar';
import { Landing } from './components/Layout/Landing';
import { Login } from './components/Auth/Login';
import Signup from './components/Auth/Signup';

import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/auth/auth.actions';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
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
};

export default App;
