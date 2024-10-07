import classNames from 'classnames';
import styles from './Button.module.css';

export default function Button({
  className,
  type = 'button',
  onClick,
  disabled = false,
  children,
}) {
  const buttonClass = classNames({
    [styles.default]: true,
    [className]: true,
    [styles.disabled]: disabled,
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
