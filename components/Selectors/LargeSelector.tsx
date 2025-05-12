import { ReactElement } from "react";

interface LargeSelectorProps {
  title: string;
  description?: string;
  icon?: ReactElement;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  dark?: boolean;
  lessRounded?: boolean;
  className?: string;
}

const LargeSelector = ({
  title,
  description,
  icon,
  selected = false,
  onClick,
  disabled = false,
  dark = false,
  lessRounded = false,
  className = "",
}: LargeSelectorProps) => {
  const baseClasses = `
    w-full text-left p-6 border transition-all duration-500 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    transform
  `;

  const hoverClasses = disabled
    ? ""
    : `hover:shadow-lg hover:-translate-y-1 hover:scale-[1.005] active:scale-[0.98]`;

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";
  const borderRadius = lessRounded ? "rounded-lg" : "rounded-3xl";

  const selectedClasses = selected
    ? `
      text-white bg-primary bg-gradient-to-r from-primary to-secondary bg-left
      bg-[length:125%_125%] hover:bg-right border-transparent shadow-md
    `
    : dark
      ? "ring-2 ring-primary bg-transparent text-white"
      : "ring-2 ring-primary bg-white text-gray-800";

  const combinedClasses = `
    ${baseClasses}
    ${hoverClasses}
    ${disabledClasses}
    ${borderRadius}
    ${selectedClasses}
    ${className}
  `;

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClasses}>
      {icon && <div className="mb-4 text-white">{icon}</div>}
      <div
        className={`text-lg font-semibold mb-1 ${selected || dark ? "text-white" : ""}`}
      >
        {title}
      </div>
      {description && (
        <div
          className={`text-sm ${selected || dark ? "text-gray-200" : "text-gray-400"}`}
        >
          {description}
        </div>
      )}
    </button>
  );
};

export default LargeSelector;
