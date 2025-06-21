// ui/src/hooks/useToast.tsx
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";

type Toast = {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

type ToastContextValue = {
  toast: (type: Toast["type"], message: string, position?: Toast["position"]) => void;
  currentToast: Toast | null;
};

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastQueue, setToastQueue] = useState<Toast[]>([]);
  const [currentToast, setCurrentToast] = useState<Toast | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showNextToast = () => {
    setToastQueue((prevQueue) => {
      const [, ...nextQueue] = prevQueue;
      const nextToast = nextQueue[0] || null;
      setCurrentToast(nextToast);

      if (nextToast) {
        timeoutRef.current = setTimeout(showNextToast, 4000);
      }

      return nextQueue;
    });
  };

  const toast = (type: Toast["type"], message: string, position: Toast["position"] = "top-right") => {
    const id = Math.random().toString(36).slice(2, 9);
    const newToast: Toast = { id, type, message, position };

    setToastQueue((prev) => {
      const newQueue = [...prev, newToast];

      // If no toast is currently showing, show this one immediately
      if (!currentToast) {
        setCurrentToast(newToast);
        timeoutRef.current = setTimeout(showNextToast, 4000);
        return newQueue;
      }

      return newQueue;
    });
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return <ToastContext.Provider value={{ toast, currentToast }}>{children}</ToastContext.Provider>;
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context.toast;
}
