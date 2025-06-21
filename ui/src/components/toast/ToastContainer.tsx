// ui/src/components/ToastContainer.tsx
import React, {useContext} from "react";
import {ToastContext} from "../../hooks/toast/useToast"; // correct relative path
import {Toast} from "./Toast";

export const ToastContainer: React.FC = () => {
  const context = useContext(ToastContext);
  if (!context) return null; // safety fallback
  const {toasts} = context;

  return (
    <div className="fixed bottom-6 right-6 w-80 z-50">
      {toasts.map((t) => (
        <Toast key={t.id} type={t.type} message={t.message} />
      ))}
    </div>
  );
};
