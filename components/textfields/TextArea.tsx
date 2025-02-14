interface TextareaProps {
  id: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  state?: "default" | "error" | "success" | "warning";
  disabled?: boolean;
  rows?: number;
  cols?: number;
}

export type { TextareaProps };

const Textarea = ({
  id,
  placeholder,
  value,
  className,
  onChange,
  state = "default",
  disabled,
  rows = 4,
  cols,
}: TextareaProps) => {
  const stateClasses = {
    success: "outline outline-[2px] outline-state-success outline-solid",
    warning: "outline outline-[2px] outline-state-warning outline-solid",
    error: "outline outline-[2px] outline-state-error outline-solid",
    default: "outline-primary",
  };

  return (
    <textarea
      className={`text-base resize-none w-full px-5 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary-purple hover:border-primary-purple bg-gray-100
              ${state && stateClasses[state]} 
              ${disabled ? "opacity-80" : "hover:shadow-lg"}
              ${className}
            `}
      placeholder={placeholder}
      id={id}
      data-testid={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      cols={cols}
    />
  );
};

export default Textarea;
