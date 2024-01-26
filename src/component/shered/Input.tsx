import React from "react";
import style from "./Input.module.css";

interface InputValue {
  name: string;
  children: string;
  inputType: string;
  maxLength: number;
  styleInput: any;
  onChange: React.ChangeEventHandler;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value:string
}

export const Input = ({
  name,
  children,
  inputType,
  styleInput,
  maxLength,
  onBlur,
  onChange,
  value,
}: InputValue) => {
  return (
    <input
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      style={styleInput}
      className={style.input}
      type={inputType}
      placeholder={children}
      maxLength={maxLength}
      required
    />
  );
};
