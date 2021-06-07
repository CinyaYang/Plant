import React from "react";
import "../css/textInput.css";
const TextInput = ({ name, type, label, value, error, changeHandler }) => {
  return (
    <div className="textInput form-group">
      <label className="name" htmlFor={name}>
        {label}:
      </label>
      <input
        value={value}
        onChange={changeHandler}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
