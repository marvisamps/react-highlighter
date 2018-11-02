export const CHANGE_HIGHLIGHT_COLOR = 'CHANGE_HIGHLIGHT_COLOR';

export const changeColor = color => ({
  type: CHANGE_HIGHLIGHT_COLOR,
  color,
});

export const YELLOW_VISIBLE = 'YELLOW_VISIBLE';
export const yellowVisible = color => ({ type: YELLOW_VISIBLE, payload: color });

export const RED_VISIBLE = 'RED_VISIBLE';
export const redVisible = () => ({ type: RED_VISIBLE });

export const GREEN_VISIBLE = 'GREEN_VISIBLE';
export const greenVisible = () => ({ type: GREEN_VISIBLE });