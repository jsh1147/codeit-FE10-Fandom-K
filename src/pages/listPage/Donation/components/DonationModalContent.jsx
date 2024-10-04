import styles from './DonationModalContent.module.css';
import creditIcon from '@/assets/icons/credit.svg';
import { toast } from 'react-toastify';
import { proceedDonation } from '@/apis/donationsApi';
import { useCredit } from '@/hooks/useCredit';
import Button from './Button';

const ONLY_NUMBER = '숫자만 입력이 가능해요';
const CREDIT_NOT_ENOUGH = '갖고 있는 크레딧보다 더 많이 후원할 수 없어요';
const DONATION_SUCCESS = '🌈 후원 완료!';
const DONATION_FAILURE = '❌ 후원 요청 실패! 다시 시도해주세요!';

export default function DonationModalContent({
  id,
  title,
  subtitle,
  idol,
  errorMsg,
  setErrorMsg,
  toDonateCredit,
  setToDonateCredit,
  onClose,
}) {
  const { credit, deductCredit } = useCredit();

  const handleCreditOnChange = (e) => {
    if (isNaN(Number(e.target.value))) {
      e.target.value = '';
      setErrorMsg(ONLY_NUMBER);
      return;
    }

    setErrorMsg(null);
    setToDonateCredit(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (credit < toDonateCredit) {
      setErrorMsg(CREDIT_NOT_ENOUGH);
      return;
    }

    try {
      await proceedDonation(id, toDonateCredit);

      deductCredit(toDonateCredit);
      setErrorMsg(null);
      setToDonateCredit(0);
      onClose();

      toast.success(DONATION_SUCCESS);
    } catch (error) {
      console.log(error);
      toast.error(DONATION_FAILURE);
    }
  };

  return (
    <>
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
          {errorMsg && <span className={styles.errorMessage}>{errorMsg}</span>}
        </div>
        <div className={styles.buttonWrapper}>
          <Button text="후원하기" type="submit" disabled={!toDonateCredit} />
        </div>
      </form>
    </>
  );
}
