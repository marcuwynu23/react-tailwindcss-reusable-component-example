// ui/src/components/Modal.tsx

import clsx from "clsx";
import { forwardRef, ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai"; // 👈 Close icon

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  fullScreen?: boolean;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ children, isOpen, onClose, title, fullScreen = false }, ref) => {
  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={clsx("fixed inset-0 z-50 flex items-center justify-center bg-black/50", fullScreen ? "" : "px-5 py-4")}
      onClick={onClose}
    >
      <div
        className={clsx("relative bg-white ", fullScreen ? "w-full h-full max-w-none" : "w-full max-w-lg rounded-lg shadow-lg")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (only if title is provided) */}
        {title && (
          <div className="flex items-center justify-between px-4 py-3">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={clsx("p-4", fullScreen && "h-[calc(100%-3rem)] overflow-auto")}>{children}</div>
      </div>
    </div>
  );
});

Modal.displayName = "Modal";
