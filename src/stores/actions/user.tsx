import {USER_DATA} from '../types';

const setUserData = (payload: any) => ({
  type: USER_DATA,
  payload,
});

export default {
  setUserData,
};
