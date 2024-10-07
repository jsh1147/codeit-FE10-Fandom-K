import Button from '@/components/Button';
import chartIcon from '@/assets/icons/chart.svg';
import styles from './Title.module.css';

export default function Title({ onClick, ...modalProps }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>이달의 차트</h2>

      <Button className={styles.button} onClick={onClick} {...modalProps}>
        <img src={chartIcon} alt="" />
        차트 투표하기
      </Button>
    </div>
  );
}
