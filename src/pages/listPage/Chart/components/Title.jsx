import styles from './Title.module.css';
import CustomModal from './CustomModal';
import WarningModal from './WarningModal';
import Button from '@/components/Button';
import chartIcon from '@/assets/icons/chart.svg';
import { useCredit } from '@/hooks/useCredit';
import { useModal } from '@/hooks/useModal';

export default function Title({ onClick, ...modalProps }) {
  const { credit } = useCredit();

  const title = modalProps.tabData.find(
    (item) => modalProps.activeTab === item.status,
  )?.label;

  const handleToggleModal = (isOpen) => {
    modalProps.setModalIsOpen(isOpen);
  };

  const { isOpen, openModal, isClosing, closeModal } = useModal();

  const handleOpenModal = () => {
    if (credit >= 1000) {
      handleToggleModal(true);
    } else {
      openModal();
    }
  };

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>이달의 차트</h2>

      <div>
        <Button className={styles.button} onClick={handleOpenModal}>
          <img src={chartIcon} alt="차트 아이콘" />
          차트 투표하기
        </Button>

        <CustomModal
          isOpen={modalProps.modalIsOpen}
          onRequestClose={() => handleToggleModal(false)}
          title={title}
          onClick={onClick}
          {...modalProps}
        />

        {isOpen && <WarningModal isClosing={isClosing} onClose={closeModal} />}
      </div>
    </div>
  );
}
