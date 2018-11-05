import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

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
  border-radius: 30px;
  padding: 8px 10px;
  margin-right: 10px;
  cursor: pointer;
  ${props =>
    props.activeFilter &&
    css`
      background-color: ${({ background }) =>
        (background === "yellow" && "var(--color-primary)") ||
        (background === "red" && "var(--color-secondary)") ||
        (background === "green" && "var(--color-terciary)")};
      color: var(--color-zero);
    `};
`;

const Button = ({ background, label, onClick, activeFilter }) => {
  return (
    <Btn background={background} onClick={onClick} activeFilter={activeFilter}>
      {label}
    </Btn>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  activeFilter: PropTypes.func
};

export default Button;
