interface RadioButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  name: string;
  className?: string;
  disabled?: boolean;
  smaller?: boolean;
  label?: string;
}

export type { RadioButtonProps };

const RadioButton = ({
  checked,
  onChange,
  name,
  className,
  disabled,
  smaller = false,
  label,
}: RadioButtonProps) => {
  return (
    <label
      className={`inline-flex items-center cursor-pointer ${disabled ? "cursor-not-allowed" : ""}`}
    >
      <input
        type="radio"
        className="peer hidden h-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        name={name}
      />
      <span
        className={`flex items-center justify-center rounded-full shadow-md bg-white transition-all duration-300 border-[1.5px] border-solid border-primary border-opacity-80
            ${checked ? "shadow-primary/40 hover:brightness-90" : "hover:bg-gray-100"}
            ${disabled ? "opacity-70 cursor-default" : "hover:scale-[1.04]"}
            ${smaller ? "w-5 h-5" : "w-6 h-6"}
            ${className}`}
      >
        {checked && (
          <span
            className={`${smaller ? "w-[12px] h-[12px]" : "w-[14px] h-[14px]"} bg-primary bg-opacity rounded-full`}
          />
        )}
      </span>
      {label && (
        <span className={`ml-4 text-black ${disabled && "opacity-70"}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default RadioButton;
