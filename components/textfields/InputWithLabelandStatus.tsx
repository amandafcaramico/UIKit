import React from "react";
import Input, { InputProps } from "./Input";

interface InputWithLabelandStatusProps extends InputProps {
  label: string;
  status: string;
}

const InputWithLabelandStatus = ({
  label,
  status,
  ...inputProps
}: InputWithLabelandStatusProps) => {
  const statusColors = {
    success: "text-state-success",
    error: "text-state-error",
    warning: "text-state-warning",
    default: "text-primary",
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputProps.id}
        className="block text-base font-medium mb-2"
      >
        {label}
      </label>
      <Input {...inputProps} />
      <span
        className={`text-xs mt-2 block ${statusColors[inputProps.state || "default"]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default InputWithLabelandStatus;
