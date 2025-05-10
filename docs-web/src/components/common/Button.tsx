import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
  ...props
}) => {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;