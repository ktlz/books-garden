"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  title: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  handleClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyles = "px-6 py-2 rounded-md text-base font-medium transition";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:underline",
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {title}
    </button>
  );
};

export default Button;
