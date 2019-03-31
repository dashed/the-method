// 3rd-party imports

import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled, { css } from "styled-components";

// components

const StyledProvider = styled(LiveProvider)`
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: #1d1f27;
  font-family: "Source Code Pro", monospace;
  font-size: 0.875rem;
  height: 21.875rem;
  max-height: 50%;
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  background-color: #ffc9c9;
  padding: 10px;
`;

const CodeBlock = props => {
  const { children, className, live, scope, ...restProps } = props;

  const language = className ? className.replace(/language-/, "") : "js";

  const code = String(children).trim();

  if (live) {
    const liveCodeProps = {
      ...restProps
    };

    if (scope) {
      liveCodeProps.scope = scope;
    }

    return (
      <div>
        <StyledProvider code={code} {...liveCodeProps}>
          <LiveWrapper>
            <StyledEditor>
              <LiveEditor />
            </StyledEditor>
            <StyledPreview />
          </LiveWrapper>
          <StyledError />
        </StyledProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
