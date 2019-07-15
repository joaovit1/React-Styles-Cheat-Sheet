import { PLAYER_UPDATE_VALUE, RESET } from '../actions/actionTypes';
const initialState = {
    values:["","","","","","","","",""],
    playerSymbol:'X',    
};
export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_UPDATE_VALUE:
      return {
        ...state,
        values: action.values,
        playerSymbol: action.playerSymbol,        
      };
    case RESET:
      return {
        ...state,
        values: initialState.values,
        playerSymbol: initialState.playerSymbol,        
      };      
    default:
      return state;
  }
};