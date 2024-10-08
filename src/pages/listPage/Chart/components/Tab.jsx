import classNames from 'classnames';
import styles from './Tab.module.css';

export default function Tab({ label, status, activeTab, onClick }) {
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
