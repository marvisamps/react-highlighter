import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Btn = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ background }) =>
    (background === "yellow" && "var(--color-primary)") ||
    (background === "red" && "var(--color-secondary)") ||
    (background === "green" && "var(--color-terciary)")};
  color: ${({ background }) =>
    (background === "yellow" && "var(--color-primary)") ||
    (background === "red" && "var(--color-secondary)") ||
    (background === "green" && "var(--color-terciary)")};
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = ({ background, label, onClick }) => {
  return (
    <Btn background={background} onClick={onClick}>
      {label}
    </Btn>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
