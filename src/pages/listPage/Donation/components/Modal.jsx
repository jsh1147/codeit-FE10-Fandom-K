import Button from './Button';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '@/assets/icons/close-modal.svg';
import creditIcon from '@/assets/icons/credit.svg';
import { useState } from 'react';
import { donationsMsg } from '@/constants/errorMessages';
import { useCredit } from '@/hooks/useCredit';
import { toast } from 'react-toastify';
import { proceedDonation } from '@/apis/donationsApi';

export default function Modal({ isOpen, onClose, id, title, subtitle, idol }) {
  const [toDonateCredit, setToDonateCredit] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const { credit, deductCredit } = useCredit();

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

  const handleCreditOnChange = (e) => {
    if (isNaN(Number(e.target.value))) {
      e.target.value = '';
      setErrorMsg(donationsMsg.onlyNumber);
      return;
    }

    setErrorMsg(null);
    setToDonateCredit(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (credit < toDonateCredit) {
      setErrorMsg(donationsMsg.creditNotEnough);
      return;
    }

    try {
      await proceedDonation(id, toDonateCredit);
      deductCredit(toDonateCredit);
      setErrorMsg(null);
      setToDonateCredit(0);
      toast.success('🌈 후원 완료!');
      onClose();
    } catch (error) {
      console.log(error);
      toast.error('❌ 후원 요청 실패! 다시 시도해주세요!');
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalBackground} onClick={handleOnCloseModal}>
      <div className={styles.modalContent}>
        <section className={styles.modalTitleContainer}>
          <h4 className={styles.modalTitle}>후원하기</h4>
          <button onClick={handleOnCloseModal} className={styles.modalClose}>
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </section>
        <section className={styles.contentContainer}>
          <div className={styles.contentWrapper}>
            <img
              src={idol.profilePicture}
              alt={idol.name}
              className={styles.idolImg}
            />
            <div className={styles.titleWrapper}>
              <span className={styles.subtitle}>{subtitle}</span>
              <h4 className={styles.title}>{title}</h4>
            </div>
          </div>
        </section>
        <form className={styles.creditContainer} onSubmit={handleOnSubmit}>
          <div>
            <div
              className={`${styles.creditInputWrapper} ${errorMsg ? styles.error : ''}`}
            >
              <input
                className={styles.creditInput}
                type="text"
                placeholder="크레딧 입력"
                onChange={handleCreditOnChange}
              />
              <img src={creditIcon} alt="크레딧 아이콘" />
            </div>
            {errorMsg && (
              <span className={styles.errorMessage}>{errorMsg}</span>
            )}
          </div>
          <div className={styles.buttonWrapper}>
            <Button text="후원하기" type="submit" disabled={!toDonateCredit} />
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
