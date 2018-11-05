import {
  CHANGE_VISIBLE,
  SET_CONTENT,
  CHANGE_TEXT,
  SET_HIGHLIGHT
} from "../actions";

const initialState = {
  text:
    "So, how can I summarise how living in the Netherlands would change your life? You’ll live in a world with delicious Dutch treats, rekindle your love of cycling and the great outdoors. Your camera and phone would go into overdrive at all the beautiful things to capture.",
  visible: "",
  highlight: "yellow",
  selections: {
    red: [],
    green: [],
    yellow: []
  }
};

export const visible = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: action.value };

    case CHANGE_VISIBLE:
      return { ...state, visible: action.value };

    case SET_HIGHLIGHT:
      return { ...state, highlight: action.value };

    case SET_CONTENT:
      const { color, value } = action;
      return {
        ...state,
        selections: {
          ...state.selections,
          [color]: [...state.selections[color], value]
        }
      };

    default:
      return state;
  }
};
