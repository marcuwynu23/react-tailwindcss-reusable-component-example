// ui/src/components/Modal.tsx
import {forwardRef, ReactNode} from "react";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({children, isOpen, onClose}, ref) => {
    if (!isOpen) return null;
    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg p-6 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
