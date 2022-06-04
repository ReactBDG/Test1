import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_LOADING,
  GET_CHARACTERS_SUCCESS,
} from "./types";

export const getCharactersAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CHARACTERS_LOADING });
    const r = await fetch(
      "https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json"
    );
    const resp = await r.json();

    dispatch({ type: GET_CHARACTERS_SUCCESS, payload: resp.characters });
  } catch (error) {
    dispatch({ type: GET_CHARACTERS_ERROR, payload: error });
  } finally {
    dispatch({ type: GET_CHARACTERS_LOADING });
  }
};
