import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({className, children, ...rest}) => {
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center",
        "px-4 py-2 rounded-md font-medium",
        "bg-blue-600 text-white shadow-md",
        "transition duration-200 ease-in-out",
        "hover:bg-blue-700 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
        "active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
