import { useState } from 'react';
import Button from './Button';
import styles from './DonationCard.module.css';
import ProgressBar from './ProgressBar';
import Modal from './Modal';
import DonationModalContent from './DonationModalContent';

export default function DonationCard({
  id,
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
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const [toDonateCredit, setToDonateCredit] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

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
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        setErrorMsg={setErrorMsg}
        setToDonateCredit={setToDonateCredit}
      >
        <DonationModalContent
          id={id}
          title={title}
          subtitle={subtitle}
          idol={idol}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          toDonateCredit={toDonateCredit}
          setToDonateCredit={setToDonateCredit}
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
}
