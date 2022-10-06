import React from "react";
import "./Select.css";

import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { colourOptions } from './data';
export const colourOptions = [
  { value: "pizza", label: "Pizza", color: "#00B8D9" },
  { value: "burger", label: "Burger", color: "#0052CC" },
  { value: "fruit", label: "Fruit", color: "#5243AA" },
  { value: "discount", label: "Discount", color: "#FF5630" },

];

const animatedComponents = makeAnimated();

export default function SelectRest(props) {
  const customStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,

        textAlign: "left",
      };
    },
  };
  return (
    <>
      <Select
        id="sel"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={colourOptions}
        onChange={(e) => {
          console.log({e});
          
          props.handleCat(e);
        }}
      />
    </>
  );
}
