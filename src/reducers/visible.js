import {
  CHANGE_VISIBLE,
  SET_CONTENT,
  CHANGE_TEXT,
  SET_HIGHLIGHT
} from "../actions";

const initialState = {
  text:
    "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.",
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
