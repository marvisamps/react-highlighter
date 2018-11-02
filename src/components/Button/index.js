import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button(props => ({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: props.background,
  color: props.background,
  background: 'transparent',
  borderRadius: '4px',
  cursor: 'pointer',
}));

const Button = ({ background, label, onClick }) => {

  return (
    <Btn background={background} onClick={onClick}>
      {label}
    </Btn>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button;
