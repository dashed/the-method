// 3rd-party imports

import React from "react";
import styled from "styled-components";

// local imports

import UsageList from "./usage_list";
import PathToDoSVG from "./do_list.svg";

// components

const Container = styled.div`
  display: flex;

  > * + * {
    margin-left: ${8.5 * 8}px;
  }
`;

const UsageGuidelines = () => {
  const list = [
    "Default text indicates expected user’s action.",
    "Default text indicates expected user’s action."
  ];

  return (
    <Container>
      <UsageList
        title="Do"
        color="#61b405"
        bulletImagePath={PathToDoSVG}
        list={list}
      />
      <UsageList
        title="Don't"
        color="#d0021b"
        bulletImagePath={PathToDoSVG}
        list={list}
      />
    </Container>
  );
};

export default UsageGuidelines;
