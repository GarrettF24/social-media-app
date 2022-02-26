import { combineReducers } from 'redux';
import alertReducer from '../alerts/alert.reducer';

export const rootReducer = combineReducers({
  alertReducer,
});
