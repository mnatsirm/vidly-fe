import React from "react";

const Input = props => {
  const { name, label, value, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {error && <div className="aler alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
