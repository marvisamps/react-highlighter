import React from 'react';
import PropTypes from 'prop-types';

const InteractionText = ({ content, onInteract }) => {

  return (
    <p onMouseUp={onInteract}>
      {content}
    </p>
  )
}

InteractionText.propTypes = {
  content: PropTypes.string.isRequired,
  onInteract: PropTypes.func.isRequired,
}


export default InteractionText;
