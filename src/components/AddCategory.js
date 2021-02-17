import React, { useState } from "react";
import propTypes from "prop-types";

const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }

    //console.log("submit hecho");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: propTypes.func.isRequired,
};

export default AddCategory;
