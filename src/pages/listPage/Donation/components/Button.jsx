import styles from './Button.module.css';

export default function Button({
  text,
  type = 'button',
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
