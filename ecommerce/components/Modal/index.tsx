"use client";
// Libraries
import React from "react";

// Components
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  labelButton?: string;
};

const Modal = ({
  children,
  isOpen = false,
  onClose = () => {},
  title,
  onSubmit,
  labelButton,
}: Props) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter m="0 auto">
          <Button variant="primary" mr={3} onClick={onSubmit}>
            {labelButton}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
