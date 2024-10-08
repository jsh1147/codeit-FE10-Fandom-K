import styles from './FetchError.module.css';
import creditIcon from '@/assets/icons/credit.svg';
import Button from '@/components/Button';

export default function FetchError({ error, onError }) {
  return (
    <div className={styles.errorContainer}>
      <img src={creditIcon} alt="크레딧 아이콘" className={styles.creditIcon} />
      <h3 className={styles.errorTitle}>{error}</h3>
      <p>
        오류가 지속될 경우 <span className={styles.keyword}>관리자</span>
        에게 문의해주세요
      </p>
      <div className={styles.reloadButtonWrapper}>
        <Button onClick={onError}>페이지 새로고침</Button>
      </div>
    </div>
  );
}
