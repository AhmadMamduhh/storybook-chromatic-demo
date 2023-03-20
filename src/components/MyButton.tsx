import * as React from "react";
import { Button, ButtonProps } from "@mui/material";

type MyButtonProps = ButtonProps & {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const MyButton: React.FC<MyButtonProps> = ({
  color = "primary",
  variant = "contained",
  fullWidth = false,
  onClick,
  disabled = false,
  children,
  ...rest
}) => {

  return (
    <Button
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MyButton;