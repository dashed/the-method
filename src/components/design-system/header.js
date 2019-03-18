// 3rd-party imports

import React from "react";
import styled, { css } from "styled-components";

// local imports

import ImageSource from "src/components/image";

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

const headlineFont = css`
  font-family: "Fira Sans", sans-serif;
  font-weight: normal;
`;

const Headline = styled.div`
  ${headlineFont};

  color: #003267;

  display: flex;
  align-items: center;

  > * + * {
    margin-left: 16px;
  }
`;

const TitleHeadline = styled.div`
  display: flex;
  align-items: center;

  margin-top: 24px;
`;

const Title = styled.div`
  ${headlineFont};

  font-size: 48px;
  line-height: 1.17;
`;

const Header = props => {
  return (
    <HeaderBlock>
      <Headline>
        <span>THE METHOD DESIGN SYSTEM</span>{" "}
        <ImageSource src="ownr_logo.svg" alt="Ownr" />
      </Headline>

      <TitleHeadline>
        <Title>{props.title}</Title>
      </TitleHeadline>
    </HeaderBlock>
  );
};

export default Header;
