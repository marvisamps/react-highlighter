import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextContent = styled.textarea`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  padding: 14px;
`;

const TextArea = ({ value, onChange }) => {
  return <TextContent value={value} onChange={onChange} />;
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
