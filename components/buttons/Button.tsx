import { ReactElement, ReactNode } from "react";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  lessRounded?: boolean;
  outline?: boolean;
  icon?: ReactElement;
  iconPosition?: "left" | "right";
  dark?: boolean;
  children?: ReactNode;
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
  dark = false,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`w-full ring-offset-background transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-70 inline-flex items-center justify-center px-4 py-2 border-0 font-medium 
        ${
          outline
            ? `bg-transparent border-2 border-primary hover:bg-primary hover:text-white ${
                dark ? "text-white" : "text-primary"
              }`
            : "text-white bg-primary bg-gradient-to-r from-primary to-secondary bg-[length:125%_125%] bg-left hover:bg-right shadow-md"
        } 
        focus:outline-none hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] hover:scale-[1.005] 
        ${lessRounded ? "rounded-lg" : "rounded-3xl"}
        ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition == "left" && <span className="mr-2">{icon}</span>}
      {children || title}
      {icon && iconPosition == "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
