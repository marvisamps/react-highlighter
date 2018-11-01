import { CHANGE_HIGHLIGHT_COLOR } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
   case CHANGE_HIGHLIGHT_COLOR:
    return [
      ...state,
      { highlightColor: action.color },
    ]
   default:
    return state
  }
 }