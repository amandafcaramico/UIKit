interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  smaller?: boolean;
  label?: string;
}

export type { CheckboxProps };

const Checkbox = ({
  checked,
  onChange,
  className,
  disabled,
  smaller = false,
  label,
}: CheckboxProps) => {
  return (
    <label
      className={`inline-flex items-center cursor-pointer group ${disabled ? "cursor-not-allowed" : ""}`}
    >
      <input
        type="checkbox"
        className="peer hidden h-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span
        className={`flex items-center justify-center rounded-md shadow-md transition-all duration-300 border-[1.5px] border-solid border-primary border-opacity-50
          ${checked ? "bg-primary shadow-primary/40 hover:brightness-90" : "bg-white hover:bg-gray-100"}
          ${disabled ? "opacity-70 cursor-default" : "hover:scale-[1.04]"}
          ${smaller ? "w-5 h-5" : "w-6 h-6"}
          ${className}`}
      >
        {checked && (
          <svg
            className={`${smaller ? "w-[13px] h-[13px] " : "w-4 h-4"} text-white`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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

export default Checkbox;
