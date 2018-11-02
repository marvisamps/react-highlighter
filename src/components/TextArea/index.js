import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextContent = styled.textarea`
  flex: 1,
`;

const TextArea = ({ value, onChange }) => {

  return (
    <TextContent value={value} onChange={onChange} />
  )
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}


export default TextArea;
