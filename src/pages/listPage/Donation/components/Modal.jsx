import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '@/assets/icons/close-modal.svg';
import { useState, useEffect } from 'react';

import DonationModalContent from './DonationModalContent';

export default function Modal({ isOpen, onClose, id, title, subtitle, idol }) {
  const [toDonateCredit, setToDonateCredit] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.key === 'Escape') {
        setErrorMsg(null);
        setToDonateCredit(0);
        onClose();
      }
    };

    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [onClose]);

  if (!isOpen) return null;

  const handleOnCloseModal = (e) => {
    if (
      e.currentTarget.tagName.toLowerCase() === 'div' &&
      !(e.target === e.currentTarget)
    ) {
      return;
    }

    setErrorMsg(null);
    setToDonateCredit(0);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.modalBackground} onClick={handleOnCloseModal}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitleContainer}>
          <h4 className={styles.modalTitle}>후원하기</h4>
          <button onClick={handleOnCloseModal} className={styles.modalClose}>
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
        <div>
          <DonationModalContent
            id={id}
            title={title}
            subtitle={subtitle}
            idol={idol}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
            toDonateCredit={toDonateCredit}
            setToDonateCredit={setToDonateCredit}
            onClose={onClose}
          />
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
