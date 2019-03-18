// 3rd-party imports

import React from "react";
import styled from "styled-components";

// local imports

import PathToDoSVG from "./do_list.svg";

// components

const ListTitle = styled.div`
  margin-bottom: 16px;
`;

const ListContainer = styled.div`
  max-width: ${42 * 8}px;
  width: ${42 * 8}px;
`;

const ListDivider = styled.div`
  height: 5px;

  ${({ color }) => {
    return `background-color: ${color};`;
  }};

  margin-bottom: ${8 * 4}px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ListItemText = styled.div`
  margin-left: 8px;

  position: relative;

  /* adjust for line-height */
  top: -${((1.5 - 1) / 2) * 16}px;
`;

const ListItems = styled.div`
  > * + * {
    margin-top: 30px;
  }
`;

const UsageList = props => {
  const { title, bulletImagePath, list, color } = props;

  if (!list || list.length <= 0) {
    return null;
  }

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListDivider color={color} />

      <ListItems>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img src={bulletImagePath} />
              <ListItemText>
                <span>{item}</span>
              </ListItemText>
            </ListItem>
          );
        })}
      </ListItems>
    </ListContainer>
  );
};

export default UsageList;
