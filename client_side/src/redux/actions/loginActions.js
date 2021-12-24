import axios from 'axios';

export const ERROR_ACTION = 'ERROR';
export const LOGIN_USER_ACTION = 'GET_USERS';

export const loginusers = () => async (dispatch) => {
  try {
    const res = await axios.post();
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};
