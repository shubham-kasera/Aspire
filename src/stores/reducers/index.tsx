import {combineReducers} from 'redux';
import user from './user';

const appReducer = combineReducers({
  user,
});

export default appReducer;

export type State = ReturnType<typeof appReducer>;
