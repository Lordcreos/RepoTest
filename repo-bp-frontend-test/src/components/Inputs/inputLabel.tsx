import React, { FC } from "react";
import './inputs.css';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  disabled?: boolean;
  placeholder?: string;
  min ?: string;
}

const InputLabel: FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  disabled = false,
  placeholder = "",
  min,
}) => {
  return (
    <div className="form-input">
      <label  htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "input-error" : ""}
        disabled={disabled}
        placeholder={placeholder}
        min={ min ? min : undefined}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();  // previene que haga triger la tecla enter 
          }
        }}
      />
      {error && <span className="invalid">{error}</span>}
    </div>
  );
};

export default InputLabel;