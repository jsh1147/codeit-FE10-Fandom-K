import classNames from 'classnames';
import styles from './Button.module.css';

export default function Button({
  className,
  type = 'button',
  onClick,
  disabled = false,
  children,
}) {
  const buttonClass = classNames(styles.button, {
    [className]: className,
  });

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
