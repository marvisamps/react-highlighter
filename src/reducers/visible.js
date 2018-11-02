import { YELLOW_VISIBLE, RED_VISIBLE, GREEN_VISIBLE } from '../actions';

const initialState = {
  yellowVisible: false,
  redVisible: false,
  greenVisible: false,
};

export const visible = (state = initialState, action) => {
  switch (action.type) {
    case YELLOW_VISIBLE:
      return {
        ...state,
        yellowVisible: true,
        redVisible: false,
        greenVisible: false,
      }
    case RED_VISIBLE:
      return {
        ...state,
        yellowVisible: false,
        redVisible: true,
        greenVisible: false,
      }
    case GREEN_VISIBLE:
      return {
        ...state,
        yellowVisible: false,
        redVisible: false,
        greenVisible: true,
      }    
    default:
      return state;  
  }
}