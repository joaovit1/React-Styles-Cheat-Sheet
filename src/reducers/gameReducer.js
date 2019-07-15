import { GAME_STATUS, RESET } from '../actions/actionTypes';
const initialState = {
    gameStatus:"Waiting"
};
export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
      case GAME_STATUS:
          return {
            ...state,
            gameStatus: action.gameStatus,        
          };
      case RESET:
          return {
            ...state,
            gameStatus: initialState.gameStatus,        
          };
      default:
        return state;
  }
};