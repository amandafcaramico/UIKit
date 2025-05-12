import { ReactNode } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SelectInputProps {
  id: string;
  label?: string;
  value?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  className?: string;
  children: ReactNode;
  state?: "default" | "error" | "success" | "warning";
  stateMessage?: string;
  disabled?: boolean;
  placeholder?: string;
  lessRounded?: boolean;
  width?: string;
}

const stateClasses = {
  success: "outline outline-[2px] outline-state-success",
  warning: "outline outline-[2px] outline-state-warning",
  error: "outline outline-[2px] outline-state-error",
  default: "outline-primary",
};

const stateColors = {
  success: "text-state-success",
  error: "text-state-error",
  warning: "text-state-warning",
  default: "text-primary",
};

const Dropdown = ({
  id,
  label,
  value,
  onChange,
  className,
  children,
  state = "default",
  stateMessage,
  disabled,
  placeholder,
  lessRounded = false,
  width = "12rem",
}: SelectInputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-base font-medium mb-2">
          {label}
        </label>
      )}
      <Select
        id={id}
        value={value ?? ""}
        onChange={onChange}
        displayEmpty
        disabled={disabled}
        IconComponent={(props) => (
          <ExpandMoreIcon {...props} style={{ fill: "#4F46E5" }} />
        )}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "12px",
              marginTop: "0.5rem",
              backgroundColor: "#F3F4F6",
              transition: "all 0.3s ease",

              "& .MuiMenuItem-root": {
                transition: "all 0.3s ease-in-out",
                fontFamily: "Poppins",
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "#E8E9F5",
                },
                "&.Mui-selected": {
                  backgroundColor: "#DEDFF1",
                  fontWeight: 500,
                },
              },
            },
          },
          MenuListProps: {
            autoFocusItem: false,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            transition: "border-color 0.5s ease, border-width 0.5s ease",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4F46E5",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4F46E5",
            borderWidth: "2px",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#4F46E5",
          },
        }}
        className={`
          bg-gray-100 shadow-md !text-sm h-10 px-2
          ${lessRounded ? "!rounded-md" : "!rounded-3xl"}
          ${stateClasses[state]}
          ${disabled ? "opacity-70" : "hover:shadow-lg transition-all duration-300"}
          ${className}
        `}
        inputProps={{ "aria-label": id }}
        style={{ fontFamily: "Poppins", color: "#000", width: `${width}` }}
      >
        {placeholder && (
          <MenuItem value="" style={{ backgroundColor: "#F3F4F6" }} disabled>
            {placeholder}
          </MenuItem>
        )}
        {children}
      </Select>
      {stateMessage && (
        <span className={`text-xs mt-2 ${stateColors[state]}`}>
          {stateMessage}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
