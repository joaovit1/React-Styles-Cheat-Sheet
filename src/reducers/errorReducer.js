import { ERROR_STATUS, RESET } from '../actions/actionTypes';
const initialState = {
    error:false
};
export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
      case ERROR_STATUS:
          return {
            ...state,
            error: action.error,        
          };
      case RESET:
          return {
            ...state,
            error: initialState.error,        
          };
    default:
      return state;
  }
};