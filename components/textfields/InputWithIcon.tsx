import React from "react";
import Input, { InputProps } from "./Input";
import { styled } from "@mui/material";

interface InputWithIconProps extends InputProps {
  icon: React.ReactNode;
  onIconClick: () => void;
  label: string;
}

const PurpleText = styled("div")({
  "*": {
    color: "#4F46E5",
  },
});

const InputWithIcon = ({
  icon,
  onIconClick,
  label,
  ...inputProps
}: InputWithIconProps) => (
  <div className="flex flex-col">
    <label htmlFor={inputProps.id} className="block text-base font-medium mb-2">
      {label}
    </label>
    <div className="relative">
      <Input {...inputProps} className={`${inputProps.className} peer pr-12`} />
      <button
        type="button"
        className={`absolute right-4 top-1/2  transition-all duration-300 transform -translate-y-1/2 peer-focus:-translate-y-[calc(50%+0.25rem)]
        ${inputProps.disabled ? "opacity-80" : "hover:scale-[1.08]"}`}
        onClick={onIconClick}
        disabled={inputProps.disabled}
      >
        <PurpleText>{icon}</PurpleText>
      </button>
    </div>
  </div>
);

export default InputWithIcon;
