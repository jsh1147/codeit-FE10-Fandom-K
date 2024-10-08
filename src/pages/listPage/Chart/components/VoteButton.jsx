import CustomModal from './CustomModal';
import styles from './VoteButton.module.css';

export default function VoteButton({ onClick, ...modalProps }) {
  const title = modalProps.tabData.find(
    (item) => modalProps.activeTab === item.status,
  )?.label;

  return (
    <div>
      <button
        className={styles.openModal}
        onClick={() => {
          modalProps.setModalIsOpen(true);
        }}
      >
        차트 투표하기
      </button>

      <CustomModal
        isOpen={modalProps.modalIsOpen}
        onRequestClose={() => modalProps.setModalIsOpen(false)}
        title={title}
        onClick={onClick}
        {...modalProps}
      />
    </div>
  );
}
