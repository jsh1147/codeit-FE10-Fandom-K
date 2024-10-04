import styles from './Title.module.css';

export default function Title() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>이달의 차트</h2>

      <button className={styles.modalButton}>차트 투표하기</button>
    </div>
  );
}
