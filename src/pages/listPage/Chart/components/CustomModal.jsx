import Modal from 'react-modal';
import IdolCard from './IdolCard';
import close from '@/assets/icons/close-modal.svg';
import closeMob from '@/assets/icons/arrow-left-for-mob.svg';
import styles from './CustomModal.module.css';
import { useEffect, useRef, useState } from 'react';
import { postVotes } from '@/apis/votesApi.js';
import classNames from 'classnames';

const modalStyles = (isMobile) => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: isMobile ? 'var(--black-200)' : 'var(--black-100)',
    border: 'none',
    padding: '0',
    borderRadius: '12px',
    width: isMobile ? '100%' : '525px',
    height: isMobile ? '100%' : '693px',
  },
});

export default function CustomModal({
  isOpen,
  onRequestClose,
  title,
  onClick,
  ...modalProps
}) {
  const modalRef = useRef(null);
  const [select, setSelect] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const current = modalRef.current;
    if (current && isOpen) {
      current.addEventListener('scroll', handleModalScroll);
    }

    return () => {
      if (current) {
        current.removeEventListener('scroll', handleModalScroll);
      }
    };
  }, [modalProps.modalLoading, modalProps.modalCursor]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleModalScroll = () => {
    if (!modalRef.current || modalProps.modalLoading) return;

    const { scrollTop, scrollHeight, clientHeight } = modalRef.current;

    if (
      scrollTop + clientHeight >= scrollHeight - 30 &&
      !modalProps.modalLoading &&
      modalProps.modalHasMore &&
      !modalProps.modalLoading
    ) {
      modalProps.fetchIdols({
        gender: modalProps.activeTab,
        cursor: modalProps.modalCursor,
        target: 'modal',
      });
    }
  };

  const handleVoteSubmit = async () => {
    const selectedIdolId = document.querySelector(
      'input[name="modal"]:checked',
    )?.value;

    if (selectedIdolId) {
      const result = await postVotes(selectedIdolId);
      if (result) {
        modalProps.setUpdateResult((prev) => !prev);
        onRequestClose();
      }
    }
  };

  const buttonStatus = (select) =>
    classNames({
      [styles.submitButton]: true,
      [styles.active]: select === true,
    });

  const closeStatus = (isMobile) =>
    classNames({
      [styles.header]: true,
      [styles.headerMob]: isMobile === true,
    });

  const titleStatus = (isMobile) =>
    classNames({
      [styles.title]: true,
      [styles.titleMob]: isMobile === true,
    });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={modalStyles(isMobile)}
    >
      <div className={styles.modalContent}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleVoteSubmit();
          }}
        >
          <div className={closeStatus(isMobile)}>
            <h2 className={titleStatus(isMobile)}>{title}</h2>

            <button
              className={styles.closeModal}
              onClick={() => {
                onRequestClose();
                onClick();
              }}
            >
              <img src={isMobile ? closeMob : close} alt="닫기" />
            </button>
          </div>

          <div className={styles.scroll} ref={modalRef}>
            <ol className={styles.list}>
              {modalProps.modalIdols.map((idol, index) => (
                <IdolCard
                  idol={idol}
                  index={index}
                  key={idol.id}
                  target="modal"
                  select={select}
                  setSelect={setSelect}
                />
              ))}
            </ol>
          </div>

          <div className={styles.footer}>
            <button
              className={buttonStatus(select)}
              type="submit"
              disabled={!select}
            >
              투표하기
            </button>
            <div className={styles.info}>
              투표하는 데 <span className={styles.point}>1000크레딧</span>이
              소모됩니다.
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
