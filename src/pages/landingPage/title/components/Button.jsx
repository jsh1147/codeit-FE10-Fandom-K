import styles from './Button.module.css';

export default function Button({
  className,
  type = 'submit',
  onClick,
  content,
  disabled,
}) {
  return (
    <button
      className={`${className} ${styles.color} ${disabled ? styles.disabled : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
