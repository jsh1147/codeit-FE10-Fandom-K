import Modal from '@/components/Modal';
import Button from '@/components/Button';
import creditIcon from '@/assets/icons/credit.svg';
import styles from './WarningModal.module.css';

export default function WarningModal({ isClosing, onClose }) {
  return (
    <Modal isClosing={isClosing} onClose={onClose}>
      <div className={styles.content}>
        <img src={creditIcon} alt="크레딧 아이콘" className={styles.icon} />
        <p className={styles.messageText}>
          앗! 투표하기 위한 <span className={styles.highlight}>크레딧</span>이
          부족해요.
        </p>
        <Button className={styles.confirmButton} onClick={onClose}>
          확인
        </Button>
      </div>
    </Modal>
  );
}
