import React, { FC, ReactNode } from "react";
import styles from "../../styles/Authors/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onOk: () => void;
  onCancel: () => void;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, title, children, onOk, onCancel, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onOk}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};
