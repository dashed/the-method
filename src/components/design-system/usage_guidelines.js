// 3rd-party imports

import React from "react";
import styled from "styled-components";

// local imports

import UsageList from "./usage_list";
import PathToDoSVG from "./do_list.svg";

// components

const UsageGuidelines = () => {
  const list = [
    "Default text indicates expected user’s action.",
    "Default text indicates expected user’s action."
  ];

  return <UsageList title="Do" bulletImagePath={PathToDoSVG} list={list} />;
};

export default UsageGuidelines;
