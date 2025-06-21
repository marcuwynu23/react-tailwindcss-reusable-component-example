import { FC } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type ToastProps = {
  type: "success" | "error" | "info";
  message: string;
  position?: ToastPosition;
};

const iconMap = {
  success: <AiOutlineCheckCircle className="text-green-600 w-5 h-5" />,
  error: <AiOutlineCloseCircle className="text-red-600 w-5 h-5" />,
  info: <AiOutlineInfoCircle className="text-blue-600 w-5 h-5" />,
};

const bgMap = {
  success: "bg-green-50",
  error: "bg-red-50",
  info: "bg-blue-50",
};

const borderMap = {
  success: "border-green-300",
  error: "border-red-300",
  info: "border-blue-300",
};

const textMap = {
  success: "text-green-800 dark:text-green-400",
  error: "text-red-800 dark:text-red-400",
  info: "text-blue-800 dark:text-blue-400",
};

const positionMap: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

export const Toast: FC<ToastProps> = ({ type, message, position = "top-right" }) => {
  return (
    <div className={`fixed z-50 ${positionMap[position]} max-w-xs w-full`}>
      <div className={`flex items-start gap-3 border-l-4 rounded-md p-4 shadow-sm transition-all duration-300 ${bgMap[type]} ${borderMap[type]}`}>
        <div className="mt-0.5">{iconMap[type]}</div>
        <div className={`text-sm font-medium ${textMap[type]}`}>{message}</div>
      </div>
    </div>
  );
};
