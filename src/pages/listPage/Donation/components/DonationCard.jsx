import { useState } from 'react';
import Button from '@/components/Button';
import styles from './DonationCard.module.css';
import ProgressBar from './ProgressBar';
import Modal from '@/components/Modal';
import DonationModalContent from './DonationModalContent';
import useModal from '@/hooks/useModal';

export default function DonationCard({
  id,
  title,
  subtitle,
  targetDonation,
  receivedDonations,
  deadline,
  idol,
}) {
  const [toDonateCredit, setToDonateCredit] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const { isOpen, openModal, closeModal } = useModal();

  const handleCloseModal = () => {
    setErrorMsg(null);
    setToDonateCredit(0);
    closeModal();
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
        <Button className={styles.button} onClick={openModal}>
          후원하기
        </Button>
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
      {isOpen && (
        <Modal onClose={handleCloseModal} title="후원하기">
          <DonationModalContent
            id={id}
            title={title}
            subtitle={subtitle}
            idol={idol}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
            toDonateCredit={toDonateCredit}
            setToDonateCredit={setToDonateCredit}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
}
