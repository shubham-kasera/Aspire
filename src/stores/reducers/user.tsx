import {USER_DATA} from '../types';

const initialstate = {
  userData: [],
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload,
      });
    default:
      return state;
  }
};
