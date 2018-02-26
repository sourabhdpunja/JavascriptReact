import { combineReducers } from 'redux';
import authentificationReducer from './authentification';

const rootReducer = combineReducers({
  authenticated: authentificationReducer
});

export default rootReducer;
