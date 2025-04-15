interface TextareaProps {
  id: string;
  placeholder: string;
  value?: string;
  className?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  state?: "default" | "error" | "success" | "warning";
  disabled?: boolean;
  rows?: number;
  cols?: number;
  resize?: boolean;
  labelClassname?: string;
}

export type { TextareaProps };

const Textarea = ({
  id,
  placeholder,
  value,
  className,
  label,
  onChange,
  state = "default",
  disabled,
  rows = 4,
  cols,
  resize = false,
  labelClassname,
}: TextareaProps) => {
  const stateClasses = {
    success: "outline outline-[2px] outline-state-success outline-solid",
    warning: "outline outline-[2px] outline-state-warning outline-solid",
    error: "outline outline-[2px] outline-state-error outline-solid",
    default: "outline-primary",
  };

  return (
    <div className="flex flex-col h-full">
      {label && (
        <label
          htmlFor={id}
          className={`block font-medium text-base mb-2 ${labelClassname}`}
        >
          {label}
        </label>
      )}
      <textarea
        className={`text-base ${resize ? "resize-y" : "resize-none"} w-full h-full px-5 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary-purple bg-gray-100
              ${state && stateClasses[state]} 
              ${disabled ? "opacity-80 hover:border-transparent" : state === "default" ? "hover:border-primary-purple" : "hover:shadow-lg"}
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
    </div>
  );
};

export default Textarea;
