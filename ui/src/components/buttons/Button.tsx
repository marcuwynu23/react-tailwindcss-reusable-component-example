import clsx from "clsx";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center",
        "px-4 py-2 rounded-md font-medium",
        "bg-green-600 text-white shadow-md",
        "transition duration-200 ease-in-out",
        "hover:bg-green-700 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2",
        "active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
