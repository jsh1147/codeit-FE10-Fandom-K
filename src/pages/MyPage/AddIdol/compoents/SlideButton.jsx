import styles from './SlideButton.module.css';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

export default function SlideButton({ direction = 'left', onClick }) {
  const isLeft = direction === 'left';
  const buttonClass = `${styles.slideButton} ${isLeft ? styles.leftButton : styles.rightButton}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      <img
        src={isLeft ? ArrowLeftIcon : ArrowRightIcon}
        alt={`${isLeft ? 'left' : 'right'} arrow`}
        className={styles.icon}
      />
    </button>
  );
}
