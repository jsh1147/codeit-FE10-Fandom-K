import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export default function Modal({ title, onClose, children }) {
  const handleBackgroundMouseUp = (e) => {
    if (e.currentTarget !== e.target) return;
    onClose();
  };

  const handleButtonClick = () => {
    onClose();
  };

  return createPortal(
    <div className={styles.background} onMouseUp={handleBackgroundMouseUp}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1 className={styles.title}>{title}</h1>
          <button
            className={styles.button}
            type="button"
            onClick={handleButtonClick}
          />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
