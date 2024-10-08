import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '@/assets/icons/close-modal.svg';
import { useEffect, useState } from 'react';
import FocusTrap from './FocusTrap';

export default function Modal({
  onClose,
  allowDimClose = true,
  title,
  children,
}) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [onClose]);

  // 모달이 닫힐 때 애니메이션 동작을 위해 추가
  const handleOnClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleOnClickBackground = (e) => {
    if (!allowDimClose || !(e.target === e.currentTarget)) {
      return;
    }

    handleOnClose();
  };

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
            onClick={handleOnClose}
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
