import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ReactComponent as IconMarker } from "../../../assets/img/marker.svg";

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
  padding: 8px 10px;
  margin: 0 5px;
  cursor: pointer;
  svg {
    fill: ${({ background }) =>
      (background === "yellow" && "var(--color-primary)") ||
      (background === "red" && "var(--color-secondary)") ||
      (background === "green" && "var(--color-terciary)")};
    width: 1.3rem;
  }
  ${props =>
    props.active &&
    css`
      background-color: ${({ background }) =>
        (background === "yellow" && "var(--color-primary)") ||
        (background === "red" && "var(--color-secondary)") ||
        (background === "green" && "var(--color-terciary)")};
      svg {
        fill: var(--color-zero);
      }
    `};
`;

const Button = ({ background, onClick, active }) => {
  return (
    <Btn background={background} onClick={onClick} active={active}>
      <IconMarker />
    </Btn>
  );
};

Button.propTypes = {
  background: PropTypes.string.isRequired,
  active: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
