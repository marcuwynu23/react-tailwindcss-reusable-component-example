import { useContext } from "react";
import { ToastContext } from "../../hooks/toast/useToast";
import { Toast } from "./Toast";

export const ToastContainer: React.FC = () => {
  const context = useContext(ToastContext);
  if (!context || !context.currentToast) return null;

  const { type, message, position } = context.currentToast;

  return <Toast type={type} message={message} position={position} />;
};
