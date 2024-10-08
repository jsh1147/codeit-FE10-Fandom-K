import Modal from 'react-modal';
import IdolCard from './IdolCard';
import { useCredit } from '@/hooks/useCredit';
import close from '@/assets/icons/close-modal.svg';
import closeMob from '@/assets/icons/arrow-left-for-mob.svg';
import styles from './CustomModal.module.css';
import { useEffect, useRef, useState } from 'react';
import { postVotes } from '@/apis/votesApi.js';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import Button from '@/components/Button';

const modalStyles = (isMobile) => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    zIndex: 1,
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
    zIndex: 1,
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
  const [selectIdolId, setSelectIdolId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { deductCredit } = useCredit();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleModalScroll = () => {
    if (!modalRef.current || modalProps.modalLoading) return;

    const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
    if (
      scrollTop + clientHeight >= scrollHeight - 30 &&
      modalProps.modalHasMore
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

    try {
      await postVotes(selectedIdolId);
      modalProps.setUpdateResult((prev) => !prev);
      deductCredit(1000);
      onRequestClose();
      toast.success('✔️ 투표 완료!');
    } catch (error) {
      console.error(error);
      toast.error('❌ 투표 요청 실패! 다시 시도해주세요!');
    } finally {
      setSelectIdolId(null);
    }
  };

  const closeStatus = (isMobile) =>
    classNames(styles.header, { [styles.headerMob]: isMobile });
  const titleStatus = (isMobile) =>
    classNames(styles.title, { [styles.titleMob]: isMobile });
  const buttonStatus = (select) =>
    classNames(styles.submitButton, { [styles.active]: select });

  const resetModal = () => {
    setSelectIdolId(null);
    setSelect(false);
    onRequestClose();
    onClick();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={resetModal}
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
            <button className={styles.closeModal} onClick={resetModal}>
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
                  selectIdolId={selectIdolId}
                  setSelectIdolId={setSelectIdolId}
                  setSelect={setSelect}
                />
              ))}
            </ol>
          </div>

          <div className={styles.footer}>
            <Button
              type="submit"
              disabled={!select}
              className={buttonStatus(select)}
            >
              투표하기
            </Button>
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
