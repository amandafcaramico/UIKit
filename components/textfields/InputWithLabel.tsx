import React from "react";
import Input, { InputProps } from "./Input";

interface InputWithLabelProps extends InputProps {
  label: string;
}

const InputWithLabel = ({ label, ...inputProps }: InputWithLabelProps) => (
  <div className="flex flex-col">
    <label htmlFor={inputProps.id} className="block text-base font-medium mb-2">
      {label}
    </label>
    <Input {...inputProps} />
  </div>
);

export default InputWithLabel;
