import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Area = styled.div`
  background-color: var(--color-default-gray);
  padding: 14px;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
`;

const Text = styled.p`
  font-size: 16px;
  color: var(--color-text-default);
  margin: 0;
`;

const InteractionText = ({ content, onInteract }) => {
  return (
    <Area>
      <Text onMouseUp={onInteract}>{content}</Text>
    </Area>
  );
};

InteractionText.propTypes = {
  content: PropTypes.string.isRequired,
  onInteract: PropTypes.func.isRequired
};

export default InteractionText;
