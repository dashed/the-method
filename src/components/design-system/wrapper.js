// 3rd-party imports

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/tag";

// component

const WrapperBlock = styled.div`
  position: relative;
  display: block;

  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
`;

const Paragraph = styled.p`
  max-width: 600px;
`;

const Wrapper = props => {
  return (
    <MDXProvider components={{ p: Paragraph }}>
      <WrapperBlock>{props.children}</WrapperBlock>
    </MDXProvider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
