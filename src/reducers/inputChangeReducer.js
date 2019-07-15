import { INPUT_UPDATE_VALUE, RESET } from '../actions/actionTypes';
const initialState = {
    player1:'',
    player2:''
};
export const inputChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_UPDATE_VALUE:
      return {
        ...state,
        player1: action.player1,
        player2: action.player2
      };
    case RESET:
      return {
        ...state,
        player1: initialState.player1,
        player2: initialState.player2
      };
    default:
      return state;
  }
};