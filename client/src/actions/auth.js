import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// sign - In action
export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

// sign - Up actions
export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign Up the user
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};