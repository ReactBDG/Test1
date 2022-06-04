import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_LOADING,
  GET_CHARACTERS_SUCCESS,
} from "./types";

const initialState = {
  charactersList: [],
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return { ...state, charactersList: action.payload };
    case GET_CHARACTERS_LOADING:
      return {...state, loading: !state.loading};
    case GET_CHARACTERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default charactersReducer