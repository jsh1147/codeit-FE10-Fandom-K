import styles from './AddButton.module.css';
import PlusIcon from '@/assets/icons/plus.svg';

export default function AddButton({ onClick, className }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={`${styles.addButton} ${className}`}>
        <img src={PlusIcon} alt="Add" className={styles.icon} />
        <span className={styles.text}>추가하기</span>
      </button>
    </div>
  );
}
