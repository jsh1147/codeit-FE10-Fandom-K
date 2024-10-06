import { useCredit } from '@/hooks/useCredit';
import { useModal } from '@/hooks/useModal';
import TopUpModal from './components/TopUpModal';
import creditImage from '@/assets/icons/credit.svg';
import styles from './MyCredit.module.css';

export default function MyCredit() {
  const { credit } = useCredit();
  const { openModal, Modal } = useModal(TopUpModal);

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>내 크레딧</h2>
        <div className={styles.credit}>
          <img className={styles.image} src={creditImage} alt="" />
          <span className={styles.amount}>{credit.toLocaleString()}</span>
        </div>
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={handleButtonClick}
      >
        충전하기
      </button>
      <Modal />
    </section>
  );
}
