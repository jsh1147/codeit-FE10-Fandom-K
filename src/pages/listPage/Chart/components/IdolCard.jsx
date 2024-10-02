import styles from './IdolCard.module.css';

export default function IdolCard({ idol, index }) {
  return (
    <div className={styles.itemWrap}>
      <li className={styles.item}>
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
      </li>

      <hr className={styles.divide} />
    </div>
  );
}
