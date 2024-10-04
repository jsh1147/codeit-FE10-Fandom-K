import styles from './IdolCard.module.css';

export default function IdolCard({ idol, index }) {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.point}>
            <img
              className={styles.picture}
              src={idol.profilePicture}
              alt={idol.name}
            />
          </div>
          <div className={styles.ranking}>{index + 1}</div>
          <div className={styles.target}>
            {idol.group} {idol.name}
          </div>
        </div>

        <div className={styles.votes}>{idol.totalVotes}표</div>
      </div>

      <hr className={styles.divide} />
    </li>
  );
}
