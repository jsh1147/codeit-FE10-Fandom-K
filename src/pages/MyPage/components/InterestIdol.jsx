import styles from './InterestIdol.module.css';
import DeselectIcon from '@/assets/icons/deselect-idol.svg';

export default function InterestIdol({ idols, removeIdol }) {
  return (
    <div className={styles.Container}>
      <h2>내가 관심 있는 아이돌</h2>
      <div className={styles.idolList}>
        {idols.map((idol) => (
          <div key={idol.id} className={styles.idolCard}>
            <div className={styles.cardContent}>
              <img
                src={idol.profilePicture}
                alt={idol.name}
                className={styles.image}
              />
              <button
                className={styles.deleteIcon}
                onClick={() => removeIdol(idol.id)}
              >
                <img src={DeselectIcon} alt="삭제" />
              </button>
            </div>
            <p className={styles.name}>{idol.name}</p>
            <p className={styles.group}>{idol.group}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
