import { useState } from 'react';
import Button from './Button';
import styles from './DonationCard.module.css';
import ProgressBar from './ProgressBar';
import Modal from './Modal';

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
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
        <Button text="후원하기" onClick={openModal} />
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
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
