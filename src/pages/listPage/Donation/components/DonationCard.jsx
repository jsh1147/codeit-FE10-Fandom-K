import Button from './Button';
import styles from './DonationCard.module.css';
import ProgressBar from './ProgressBar';

export default function DonationCard({
  // id,
  // idolId,
  title,
  subtitle,
  targetDonation,
  receivedDonations,
  deadline,
  idol,
}) {
  return (
    <div className={styles.donationCard}>
      <div className={styles.idolImgWrapper}>
        <img
          src={idol.profilePicture}
          alt={idol.name}
          className={styles.idolImg}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button text="후원하기" />
      </div>
      <div className={styles.titleWrapper}>
        <span className={styles.subtitle}>{subtitle}</span>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.progressBarWrapper}>
        <ProgressBar
          targetDonation={targetDonation}
          receivedDonations={receivedDonations}
          deadline={deadline}
        />
      </div>
    </div>
  );
}
