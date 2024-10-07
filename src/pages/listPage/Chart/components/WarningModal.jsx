import { useCredit } from '@/hooks/useCredit';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import creditIcon from '@/assets/icons/credit.svg';
import styles from './WarningModal.module.css';

const WarningModalTest = ({ isVisible, onClose }) => {
  const { credit } = useCredit();

  if (!isVisible || credit >= 1000) return null;

  return (
    <Modal onClose={onClose}>
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
};

export default WarningModalTest;
