import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const submitData = (e) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) return;

    addCategory(inputValue.trim());
    setInputValue("");
  };

  const changeInputValue = (e) => setInputValue(e.target.value);

  return (
    <form onSubmit={submitData}>
      <input
        type="text"
        placeholder="Buscar gifs"
        name="input"
        value={inputValue}
        onChange={changeInputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};
