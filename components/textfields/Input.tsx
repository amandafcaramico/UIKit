interface InputProps {
  id: string;
  type: "text" | "password";
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: "default" | "error" | "success" | "warning";
  disabled?: boolean;
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
  disabled,
}: InputProps) => {
  const stateClasses = {
    success: "outline outline-[2px] outline-state-success outline-solid",
    warning: "outline outline-[2px] outline-state-warning outline-solid",
    error: "outline outline-[2px] outline-state-error outline-solid",
    default: "outline-primary",
  };

  return (
    <input
      className={`text-base w-full px-5 py-3 rounded-3xl shadow-md transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary-purple hover:border-primary-purple bg-gray-100
              ${state && stateClasses[state]} 
              ${disabled ? "opacity-70" : "hover:shadow-lg"}
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
  );
};

export default Input;
