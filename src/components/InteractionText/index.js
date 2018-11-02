import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 16px;
  color: gray; 
`;

const InteractionText = ({ content, onInteract }) => {

  return (
    <Text onMouseUp={onInteract}>
      {content}
    </Text>
  )
}

InteractionText.propTypes = {
  content: PropTypes.string.isRequired,
  onInteract: PropTypes.func.isRequired,
}


export default InteractionText;
