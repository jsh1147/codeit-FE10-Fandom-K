import styles from './ProgressBar.module.css';
import { getCompletionRate } from '@utils/donationCaculator';
import { getTimeLeft } from '@utils/getTimeLeft';
import creditIcon from '@assets/icons/credit.svg';

export default function ProgressBar({
  targetDonation,
  receivedDonations,
  deadline,
}) {
  const completionRate = getCompletionRate(receivedDonations, targetDonation);

  const progressBarStyle = {
    width: completionRate,
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.creditWrapper}>
          <img src={creditIcon} alt="크레딧 아이콘" />
          <span className={styles.targetDonation}>{targetDonation}</span>
        </div>
        <div className={styles.deadline}>{getTimeLeft(deadline)}</div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressValue} style={progressBarStyle}></div>
      </div>
    </>
  );
}
