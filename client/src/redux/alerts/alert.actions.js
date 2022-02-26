import { v4 as uuid } from 'uuid';
import AlertActionTypes from './alert.types';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: AlertActionTypes.SET_ALERT,
    payload: { msg, alertType, id },
  });
};
