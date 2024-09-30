import Button from './Button';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '@/assets/icons/close-modal.svg';
import creditIcon from '@/assets/icons/credit.svg';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOnCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalBackground} onClick={handleOnCloseModal}>
      <div className={styles.modalContent}>
        <section className={styles.modalTitleContainer}>
          <h4 className={styles.modalTitle}>후원하기</h4>
          <button onClick={handleOnCloseModal}>
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </section>
        <section className={styles.contentContainer}>
          <div className={styles.contentWrapper}>
            <img
              src="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1727362424463/MARK.webp"
              alt="test"
              className={styles.idolImg}
            />
            <div className={styles.titleWrapper}>
              <span className={styles.subtitle}>강남역 광고</span>
              <h4 className={styles.title}>민지 2023 첫 광고</h4>
            </div>
          </div>
        </section>
        <form className={styles.creditContainer}>
          <div className={styles.creditInputWrapper}>
            <input
              className={styles.creditInput}
              type="text"
              placeholder="크레딧 입력"
            />
            <img src={creditIcon} alt="크레딧 아이콘" />
          </div>
          <Button text="후원하기" type="submit" />
        </form>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
