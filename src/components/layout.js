// 3rd-party imports

import React from "react";
import PropTypes from "prop-types";

import styled, { createGlobalStyle } from "styled-components";
import "normalize.css";

// component

const Layout = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
