import styles from './LoadMore.module.css';

export default function LoadMore({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      더 보기
    </button>
  );
}
