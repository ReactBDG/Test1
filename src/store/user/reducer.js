import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./types";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_LOADING:
      return { ...state, loading: !state.loading };
    case LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default charactersReducer;
