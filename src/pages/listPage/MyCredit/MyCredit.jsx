import creditImage from '@/assets/icons/credit.svg';
import styles from './MyCredit.module.css';

export default function MyCredit() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>내 크레딧</h2>
        <div className={styles.credit}>
          <img className={styles.image} src={creditImage} />
          <span className={styles.amount}></span>
        </div>
      </div>
      <button className={styles.button}>충전하기</button>
    </section>
  );
}
