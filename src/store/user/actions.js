import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./types";

export const loginAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_LOADING });
    
    const a = new Promise((resolve => {
      setTimeout(() => {
        dispatch({ type: LOGIN_SUCCESS, payload: {name: "USER NAME", email: "user@gmail.com"} });
        resolve()
      }, 1500);
    })) 
    
    await a()
    // return true
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
  } finally {
    dispatch({ type: LOGIN_LOADING });
  }
};
