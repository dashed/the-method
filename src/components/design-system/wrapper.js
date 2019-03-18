// 3rd-party imports

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// component

const WrapperBlock = styled.div`
  position: relative;
  display: block;

  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;

  outline: 1px red solid;
`;

const Wrapper = props => {
  return <WrapperBlock>{props.children}</WrapperBlock>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
