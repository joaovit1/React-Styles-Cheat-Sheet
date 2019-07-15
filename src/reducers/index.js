import { combineReducers } from 'redux';
import { inputChangeReducer } from './inputChangeReducer'
import { gameReducer } from './gameReducer'
import { errorReducer } from './errorReducer'
import { playerReducer } from './playerReducer'

export const Reducers = combineReducers({
  inputvalue: inputChangeReducer,
  gameValue: gameReducer,
  errorValue: errorReducer,
  playerValue: playerReducer,  
});