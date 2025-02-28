import { Tooltip } from "@mui/material";
import { ReactElement } from "react";

interface IconButtonProps {
  title: string;
  icon: ReactElement;
  onClick: () => void;
  disabled?: boolean;
  lessRounded?: boolean;
  outline?: boolean;
  className?: string;
}

export type { IconButtonProps };

const IconButton = ({
  title,
  icon,
  onClick,
  className,
  lessRounded = false,
  outline = false,
  disabled,
}: IconButtonProps) => {
  return (
    <Tooltip
      title={title}
      placement="top"
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: "#171717",
            "& .MuiTooltip-arrow": {
              color: "#171717",
            },
          },
        },
      }}
      arrow
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex w-fit p-2 shadow-md transition-all duration-500 
        hover:scale-110 hover:shadow-lg cursor-pointer disabled:pointer-events-none disabled:opacity-70
        ${outline ? "bg-transparent border-2 border-primary hover:bg-primary hover:text-white" : "bg-primary"}
          ${lessRounded ? "rounded-lg" : "rounded-full"}
           ${className}`}
      >
        {icon}
      </button>
    </Tooltip>
  );
};

export default IconButton;
