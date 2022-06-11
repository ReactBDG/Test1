import { combineReducers } from 'redux';
import charactersReducer from './characters/reducer'
import user from './user/reducer'

export default combineReducers({
    characters: charactersReducer,
    user
})