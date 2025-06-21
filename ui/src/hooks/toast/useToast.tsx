// ui/src/hooks/useToast.tsx
import React, {createContext, useContext, useState, ReactNode} from "react";

type Toast = {id: string; type: "success" | "error" | "info"; message: string};
type ToastContextValue = {
  toasts: Toast[];
  toast: (type: Toast["type"], message: string) => void;
};

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined
);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({children}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (type: Toast["type"], message: string) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, {id, type, message}]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4000
    );
  };

  return (
    <ToastContext.Provider value={{toasts, toast}}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context.toast;
}
