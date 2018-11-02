export const CHANGE_HIGHLIGHT_COLOR = "CHANGE_HIGHLIGHT_COLOR";

export const changeColor = color => ({
  type: CHANGE_HIGHLIGHT_COLOR,
  color
});

export const CHANGE_VISIBLE = "CHANGE_VISIBLE";
export const changeVisible = value => ({ type: CHANGE_VISIBLE, value });

export const CHANGE_TEXT = "CHANGE_TEXT";
export const changeText = value => ({ type: CHANGE_TEXT, value });

export const SET_HIGHLIGHT = "SET_HIGHLIGHT";
export const setHighlight = value => ({ type: SET_HIGHLIGHT, value });

export const SET_CONTENT = "SET_CONTENT";
export const setContent = (color, value) => ({
  type: SET_CONTENT,
  color,
  value
});
