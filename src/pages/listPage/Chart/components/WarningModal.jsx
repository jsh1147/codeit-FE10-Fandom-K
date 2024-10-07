import styles from './WarningModalTest.module.css';
import creditIcon from '@/assets/icons/credit.svg';
import closeIcon from '@/assets/icons/close-modal.svg';

const WarningModalTest = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="닫기" className={styles.closeIcon} />
        </button>

        <img src={creditIcon} alt="크레딧 아이콘" className={styles.icon} />

        <p className={styles.messageText}>
          앗! 투표하기 위한 <span className={styles.highlight}>크레딧</span>이
          부족해요
        </p>

        <button className={styles.confirmButton} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default WarningModalTest;
