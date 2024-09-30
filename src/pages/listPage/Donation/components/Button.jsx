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
      className={`${styles.button} ${disabled ? styles.buttonDisabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
