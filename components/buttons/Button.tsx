import { ReactElement } from "react";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  lessRounded?: boolean;
  outline?: boolean;
  icon?: ReactElement;
  iconPosition?: "left" | "right";
}

export type { ButtonProps };

const Button = ({
  title,
  disabled,
  onClick,
  className,
  lessRounded = false,
  outline = false,
  icon,
  iconPosition = "right",
}: ButtonProps) => {
  return (
    <button
      className={`w-full ring-offset-background transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-70 inline-flex items-center justify-center px-4 py-2 border-0 font-medium 
        ${outline ? "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white" : "bg-primary text-white bg-gradient-to-r from-primary to-secondary bg-[length:125%_125%] bg-left hover:bg-right shadow-md"} 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] hover:scale-[1.005] 
        ${lessRounded ? "rounded-lg" : "rounded-3xl"}
        ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition == "left" && <span className="mr-2">{icon}</span>}
      {title}
      {icon && iconPosition == "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
