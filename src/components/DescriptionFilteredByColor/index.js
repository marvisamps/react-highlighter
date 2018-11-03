import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DescriptionContent = styled.p`
  font-size: 16px;
  color: var(--color-text-default);
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
  margin: 0;
  align-self: end;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-text-default);
`;

const DescriptionFilteredByColor = ({ description }) => {
  return <DescriptionContent>{description}</DescriptionContent>;
};

DescriptionFilteredByColor.propTypes = {
  description: PropTypes.string.isRequired
};

export default DescriptionFilteredByColor;
