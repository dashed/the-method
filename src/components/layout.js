// 3rd-party imports

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import "normalize.css";

// component

// NOTE: these are defaults from the RBC design system
const GlobalStyle = createGlobalStyle`
  html {
    background-color: #fff;
  }

  body {
    font-family: "Roboto", "Helvetica", sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 1.5;
  }

`;

const Styles = () => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans:300,300i,400,400i,500,500i,700,700i"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
    </React.Fragment>
  );
};

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Styles />
      {children}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
