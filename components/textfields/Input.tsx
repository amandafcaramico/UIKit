import { ReactElement } from "react";

interface InputProps {
  id: string;
  type: "text" | "password";
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: "default" | "error" | "success" | "warning";
  stateMessage?: string;
  lessRounded?: boolean;
  label?: string;
  icon?: ReactElement;
  onClickIcon?: () => void;
  disabled?: boolean;
  smaller?: boolean;
}

export type { InputProps };

const Input = ({
  id,
  type,
  placeholder,
  value,
  className,
  onChange,
  state = "default",
  stateMessage,
  lessRounded = false,
  label,
  icon,
  onClickIcon,
  disabled,
  smaller,
}: InputProps) => {
  const stateClasses = {
    success: "outline outline-[2px] outline-state-success outline-solid",
    warning: "outline outline-[2px] outline-state-warning outline-solid",
    error: "outline outline-[2px] outline-state-error outline-solid",
    default: "outline-primary",
  };

  const stateColors = {
    success: "text-state-success",
    error: "text-state-error",
    warning: "text-state-warning",
    default: "text-primary",
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`block font-medium  ${smaller ? "text-xs mb-1" : "text-base mb-2"}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`text-base w-full px-4 py-2 shadow-md transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary-purple bg-gray-100
              ${state && stateClasses[state]} 
              ${lessRounded ? "rounded-lg" : "rounded-3xl"}
              ${disabled ? "opacity-70" : "hover:shadow-lg hover:border-primary-purple"}
              ${icon && "peer pr-12"}
              ${smaller && "!py-1.5"}
              ${className}
            `}
          placeholder={placeholder}
          type={type}
          id={id}
          data-testid={id}
          value={value}
          onChange={onChange}
          autoCapitalize="none"
          disabled={disabled}
        />
        {icon && (
          <button
            type="button"
            className={`absolute right-4 top-1/2  transition-all duration-300 transform -translate-y-1/2 peer-focus:-translate-y-[calc(50%+0.25rem)]
        ${disabled ? "opacity-80" : "hover:scale-[1.08]"}`}
            onClick={onClickIcon}
            disabled={disabled}
          >
            {icon}
          </button>
        )}
      </div>
      {stateMessage && (
        <span
          className={`text-xs mt-2 block ${stateColors[state || "default"]}`}
        >
          {stateMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
