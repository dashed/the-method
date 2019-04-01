// 3rd-party imports

import React from "react";
import Downshift from "downshift";
import _ from "lodash";
import styled from "styled-components";

// local imports

import ChevronDown from "./chevron_down";

// components

const items = ["Ontario", "Alberta", "British Columbia"];

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  border-radius: 2px;
  border: solid 1px rgba(115, 109, 127, 0.4);
  background-color: #ffffff;

  ${({ isOpen }) => {
    if (!isOpen) {
      return null;
    }

    return `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `;
  }};

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;

  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #706c7f;

  cursor: pointer;
  user-select: none;
`;

const StyledLabel = styled.span`
  margin-right: 15px;

  flex-grow: 999;
`;

const DropdownLabel = props => {
  const { currentSelection, onClick, isOpen } = props;

  const placeholder = _.get(props, ["placeholder"], "");

  return (
    <DropdownWrapper onClick={onClick} isOpen={isOpen}>
      <StyledLabel>{placeholder}</StyledLabel>
      <ChevronDown />
    </DropdownWrapper>
  );
};

const Menu = styled.div`
  border-radius: 2px;
  border: solid 1px rgba(115, 109, 127, 0.4);

  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.1);

  background-color: #ffffff;
`;

const ItemList = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #33235b;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;

  cursor: pointer;
  user-select: none;

  transition: background-color 0.15s ease-in-out;

  ${({ isHighlighted }) => {
    if (!isHighlighted) {
      return null;
    }

    return `background-color: #f5f5f5;`;
  }};

  ${({ isSelected }) => {
    if (!isSelected) {
      return null;
    }

    return `text-decoration: underline;`;
  }};
`;

const DropdownMenu = props => {
  const {
    getMenuProps,
    isOpen,
    getItemProps,
    highlightedIndex,
    selectedItem
  } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <Menu>
      {items.map((item, index) => {
        const isHighlighted = highlightedIndex === index;
        const isSelected = selectedItem === item;

        return (
          <ItemList
            {...getItemProps({
              key: item,
              index,
              item,
              isHighlighted,
              isSelected
            })}
          >
            {item}
          </ItemList>
        );
      })}
    </Menu>
  );
};

const Dropdown = props => {
  const { placeholder } = props;

  return (
    <Downshift itemToString={item => (item ? item : "")}>
      {downshiftProps => {
        const {
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          toggleMenu
        } = downshiftProps;

        return (
          <div>
            <DropdownLabel
              onClick={() => {
                toggleMenu();
              }}
              currentSelection={selectedItem}
              placeholder={placeholder}
              isOpen={isOpen}
            />
            <DropdownMenu
              getMenuProps={getMenuProps}
              isOpen={isOpen}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              selectedItem={selectedItem}
            />
          </div>
        );
      }}
    </Downshift>
  );

  return <div>dropdown</div>;
};

export default Dropdown;
