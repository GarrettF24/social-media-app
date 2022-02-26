import uuid from 'uuid';
import AlertActionTypes from './alert.types';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: AlertActionTypes.SET_ALERT,
    payload: { msg, alertType, id },
  });
};
