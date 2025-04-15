import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface CustomIconProps extends SvgIconProps {
  sx?: object;
}

const CustomIcon: React.FC<CustomIconProps> = ({ sx, children, ...props }) => {
  return (
    <SvgIcon {...props} sx={{ fontSize: 24, color: "black", ...sx }}>
      {children}
    </SvgIcon>
  );
};

export default CustomIcon;
