import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '@/assets/icons/close-modal.svg';
import { useEffect } from 'react';

export default function Modal({
  isOpen,
  onClose,
  allowDimClose = true,
  title,
  children,
}) {
  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [onClose]);

  if (!isOpen) return null;

  const handleOnCloseModal = (e) => {
    if (
      !allowDimClose ||
      (e.currentTarget.tagName.toLowerCase() === 'div' &&
        !(e.target === e.currentTarget))
    ) {
      return;
    }

    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.background} onClick={handleOnCloseModal}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          {title && <h4 className={styles.title}>{title}</h4>}
          <button
            onClick={onClose}
            className={styles.close}
            aria-label="모달 닫기"
          >
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
