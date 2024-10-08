import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '@/assets/icons/close-modal.svg';
import { useEffect } from 'react';
import FocusTrap from './FocusTrap';

export default function Modal({
  isClosing,
  onClose = () => {},
  allowDimClose = true,
  title,
  children,
}) {
  const handleOnClickBackground = (e) => {
    if (!allowDimClose || !(e.target === e.currentTarget)) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className={`${styles.background} ${isClosing ? styles.fadeOut : ''}`}
      onClick={handleOnClickBackground}
    >
      <div
        className={`${styles.container} ${isClosing ? styles.slideOut : ''}`}
      >
        <div className={styles.titleContainer}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <button
            onClick={onClose}
            className={styles.close}
            aria-label="모달 닫기"
          >
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
        <FocusTrap>{children}</FocusTrap>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
