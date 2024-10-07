import VoteButton from './VoteButton';
import styles from './Title.module.css';

export default function Title({ onClick, ...modalProps }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>이달의 차트</h2>

      <VoteButton onClick={onClick} {...modalProps} />
    </div>
  );
}
