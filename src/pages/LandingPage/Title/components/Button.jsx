import styles from './Button.module.css';

export default function Button({
  className,
  type = 'submit',
  onClick,
  disabled,
  children,
}) {
  return (
    <button
      className={`${className} ${styles.color} ${disabled ? styles.disabled : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
