"use client";

// Components
import Modal from "../Modal";

type PropsTypes = {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  labelButton?: string;
};

const ConfirmationModal = ({
  title,
  isOpen,
  onClose,
  onSubmit,
  labelButton,
}: PropsTypes) => {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      labelButton={labelButton}
    />
  );
};

export default ConfirmationModal;
