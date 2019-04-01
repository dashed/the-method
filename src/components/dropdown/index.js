// 3rd-party imports

import React from "react";
import Downshift from "downshift";

import styled from "styled-components";

// components

const items = ["Ontario", "Alberta", "British Columbia"];

const DropdownWrapper = styled.div`
  border-radius: 2px;
  border: solid 1px rgba(115, 109, 127, 0.4);
  background-color: #ffffff;

  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const DropdownLabel = props => {
  const { currentSelection } = props;

  return <DropdownWrapper>foo</DropdownWrapper>;
};

const SelectedItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return <b>{item}</b>;
};

const Dropdown = () => {
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
