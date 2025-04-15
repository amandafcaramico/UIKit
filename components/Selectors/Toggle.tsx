interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  name: string;
  id: string;
  smaller?: boolean;
}

export type { ToggleProps };

const Toggle = ({
  checked,
  onChange,
  disabled,
  className = "",
  name,
  id,
  smaller = false,
}: ToggleProps) => {
  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        name={name}
        disabled={disabled}
        id={id}
      />
      <div
        className={`
        ${disabled ? "opacity-70 cursor-default" : "peer-hover:after:scale-95"}
          peer bg-white rounded-full duration-300 ${smaller ? "w-12 h-6" : "w-16 h-8"} ring-2 
          ring-primary after:duration-300 after:bg-primary 
          peer-checked:after:bg-white peer-checked:bg-primary 
          peer-checked:ring-primary 
          after:rounded-full after:absolute
          ${smaller ? "after:h-5 after:w-5 after:top-[2px] after:left-[2px]" : "after:h-6 after:w-6 after:top-1 after:left-1"}  
          after:flex after:justify-center after:items-center 
           ${smaller ? "peer-checked:after:translate-x-6" : "peer-checked:after:translate-x-8"}
        `}
      ></div>
    </label>
  );
};

export default Toggle;
