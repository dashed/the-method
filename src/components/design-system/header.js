// 3rd-party imports

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// component

const HeaderBlock = styled.div`
  position: relative;
  display: block;

  max-width: ${1120 + 60 * 2}px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 80px;

  outline: 1px red solid;
`;

const Header = props => {
  return <HeaderBlock>{props.children}</HeaderBlock>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
