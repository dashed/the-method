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
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  border-radius: 2px;
  border: solid 1px rgba(115, 109, 127, 0.4);
  background-color: #ffffff;

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
`;

const DropdownLabel = props => {
  const { currentSelection } = props;

  const placeholder = _.get(props, ["placeholder"], "");

  return (
    <DropdownWrapper>
      <StyledLabel>{placeholder}</StyledLabel>
      <ChevronDown />
    </DropdownWrapper>
  );
};

const SelectedItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return <b>{item}</b>;
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
            />
            <SelectedItem item={selectedItem} />
            <ul {...getMenuProps()}>
              {isOpen
                ? items.map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal"
                        }
                      })}
                    >
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        );
      }}
    </Downshift>
  );

  return <div>dropdown</div>;
};

export default Dropdown;
