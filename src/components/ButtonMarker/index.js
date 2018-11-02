import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as IconMarker } from "../../assets/img/marker.svg";

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
`;

const Button = ({ background, onClick }) => {
  return (
    <Btn background={background} onClick={onClick}>
      <IconMarker
        style={{
          fill:
            (background === "yellow" && "var(--color-primary)") ||
            (background === "red" && "var(--color-secondary)") ||
            (background === "green" && "var(--color-terciary)"),
          width: "1.3rem"
        }}
      />
    </Btn>
  );
};

Button.propTypes = {
  background: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
