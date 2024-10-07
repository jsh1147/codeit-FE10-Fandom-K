import { useState } from 'react';

export function useModal(Modal) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const wrappedModal = () => isOpen && <Modal onClose={closeModal}></Modal>;

  return { openModal, Modal: wrappedModal };
}
