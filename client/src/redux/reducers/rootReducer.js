import { combineReducers } from 'redux';
import alertReducer from '../alerts/alert.reducer';
import authReducer from '../auth/auth.reducer';

export const rootReducer = combineReducers({
  alertReducer,
  authReducer,
});
