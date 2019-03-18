// 3rd-party imports

import React from "react";
import styled from "styled-components";

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

const Headline = styled.div`
  font-family: "Fira Sans", sans-serif;

  color: #003267;

  display: flex;
  align-items: center;

  > * + * {
    margin-left: 16px;
  }
`;

const Header = props => {
  return (
    <HeaderBlock>
      <Headline>
        <span>THE METHOD DESIGN SYSTEM</span>{" "}
        <ImageSource src="ownr_logo.svg" alt="Ownr" />
      </Headline>
      hello
    </HeaderBlock>
  );
};

export default Header;
