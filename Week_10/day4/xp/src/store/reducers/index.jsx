import { combineReducers } from 'redux';
import reduceUser from './reduceUser';

const rootReducer = combineReducers({
  user: reduceUser,
});

export default rootReducer;