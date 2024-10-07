import styles from './IdolCard.module.css';
import CheckIcon from '@/assets/icons/select-idol.svg';

export default function IdolCard({ idol, isSelected, onSelect }) {
  return (
    <div
      className={`${styles.IdolCards} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(idol)}
    >
      <div
        className={`${styles.cardImgWrapper} ${isSelected ? styles.selected : ''}`}
      >
        <div
          className={`${styles.cardImg} ${isSelected ? styles.selected : ''}`}
        >
          <img
            src={idol.profilePicture}
            alt={idol.name}
            className={styles.image}
          />
          {isSelected && (
            <img
              src={CheckIcon}
              alt="Check Icon"
              className={styles.checkIcon}
            />
          )}
        </div>
      </div>
      <p className={styles.name}>{idol.name}</p>
      <p className={styles.group}>{idol.group}</p>
    </div>
  );
}
