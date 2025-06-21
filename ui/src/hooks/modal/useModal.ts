// ui/src/hooks/useModal.ts
import {useState, useRef} from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {isOpen, openModal, closeModal, modalRef};
}
