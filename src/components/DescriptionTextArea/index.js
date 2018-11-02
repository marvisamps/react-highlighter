import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DescriptionContent = styled.p`
  font-size: 16px;
  color: var(--color-text-default);
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
  margin: 0;
`;

const DescriptionTextArea = ({ description }) => {
  return <DescriptionContent>{description}</DescriptionContent>;
};

DescriptionTextArea.propTypes = {
  description: PropTypes.string.isRequired
};

export default DescriptionTextArea;
