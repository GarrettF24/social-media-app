import axios from 'axios';
import { setAlert } from '../alerts/alert.actions';
import AuthActionTypes from './auth.types';
import setAuthToken from '../../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: AuthActionTypes.USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: AuthActionTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: AuthActionTypes.REGISTER_FAIL,
      });
    }
  };

//Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.res.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: AuthActionTypes.LOGIN_FAIL,
    });
  }
};
// Logout / Clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: AuthActionTypes.LOGOUT });
};
