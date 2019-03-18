// 3rd-party imports

import React from "react";
import styled from "styled-components";

// local imports

import UsageList from "./usage_list";
import PathToDoSVG from "./do_list.svg";
import PathToDontSVG from "./dont_list.svg";

// components

const Container = styled.div`
  display: flex;

  > * + * {
    margin-left: ${8.5 * 8}px;
  }
`;

const UsageGuidelines = props => {
  const { dos, donts } = props;

  return (
    <Container>
      <UsageList
        title="Do"
        color="#61b405"
        bulletImagePath={PathToDoSVG}
        list={dos}
      />
      <UsageList
        title="Don't"
        color="#d0021b"
        bulletImagePath={PathToDontSVG}
        list={donts}
      />
    </Container>
  );
};

export default UsageGuidelines;
