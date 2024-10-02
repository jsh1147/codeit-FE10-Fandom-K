import classNames from 'classnames';
import styles from './Button.module.css';

export default function Button({ label, status, activeTab, onClick }) {
  const tabStatus = (tab) =>
    classNames({
      [styles.tab]: true,
      [styles.tabActive]: activeTab === tab,
    });

  return (
    <button className={tabStatus(status)} onClick={onClick}>
      {label}
    </button>
  );
}
