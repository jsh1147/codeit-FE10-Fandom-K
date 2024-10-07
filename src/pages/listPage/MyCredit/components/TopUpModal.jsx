import { useState, Fragment } from 'react';
import { useCredit } from '@/hooks/useCredit';
import Modal from './Modal';
import Button from '@/components/Button';
import creditImage from '@/assets/icons/credit.svg';
import creditWhiteImage from '@/assets/icons/credit-white.svg';
import styles from './TopUpModal.module.css';

export default function TopUpModal({ onClose }) {
  const [amount, setAmount] = useState(100);
  const { addCredit } = useCredit();

  const handleRadioChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    addCredit(amount);
    onClose();
  };

  return (
    <Modal title="크레딧 충전하기" onClose={onClose}>
      <form className={styles.form}>
        {[100, 500, 1000].map((value, idx) => (
          <Fragment key={idx}>
            <input
              className={styles.radio}
              name="topup"
              id={`radio-${idx}`}
              type="radio"
              onChange={handleRadioChange}
              value={value}
              checked={value === amount}
            />
            <label
              className={`${styles.label} ${
                value === amount ? styles.labelChecked : ''
              }`}
              htmlFor={`radio-${idx}`}
              aria-label={`${value} 크레딧 선택하기`}
            >
              <img src={creditImage} alt="" />
              {value}
            </label>
          </Fragment>
        ))}
        <Button className={styles.button} onClick={handleButtonClick}>
          <img className={styles.credit} src={creditWhiteImage} alt="" />
          충전하기
        </Button>
      </form>
    </Modal>
  );
}
