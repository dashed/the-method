// 3rd-party imports

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/tag";

// local imports

import CodeBlock from "src/components/code_block";

// component

const WrapperBlock = styled.div`
  position: relative;
  display: block;

  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
`;

const headlineFont = css`
  font-family: "Fira Sans", sans-serif;
`;

// TODO: this is Large5x in RBC design system
const H1 = styled.h1`
  ${headlineFont};

  font-size: 36px;
  line-height: 1.22;
  font-weight: normal;

  margin-top: ${8 * 8}px;
  margin-bottom: ${8 * 4}px;
`;

const Paragraph = styled.p`
  max-width: 600px;
`;

const Wrapper = props => {
  return (
    <MDXProvider components={{ p: Paragraph, h1: H1, code: CodeBlock }}>
      <WrapperBlock>{props.children}</WrapperBlock>
    </MDXProvider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
