// 3rd-party imports

import React from "react";

// local imports

import CodeBlock from "./code_block";

// component

const Playground = props => {
  const { children, scope } = props;
  return <CodeBlock live={true} children={children} scope={scope} />;
};

export default Playground;
