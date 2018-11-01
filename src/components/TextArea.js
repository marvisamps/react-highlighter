import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ value, onChange }) => {

  return (
    <textarea value={value} onChange={onChange} />
  )
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}


export default TextArea;
