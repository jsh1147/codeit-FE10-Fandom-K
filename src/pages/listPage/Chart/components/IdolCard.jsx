import classNames from 'classnames';
import styles from './IdolCard.module.css';

export default function IdolCard({
  idol,
  index,
  target,
  selectIdolId,
  setSelectIdolId,
  setSelect,
}) {
  const itemClass = classNames(styles.item, {
    [styles.modalItem]: target === 'modal',
  });

  const infoClass = classNames({
    [styles.info]: target === 'chart',
    [styles.modalInfo]: target === 'modal',
  });

  const contentClass = classNames(styles.content, {
    [styles.chartContent]: target === 'chart',
  });

  const handleClick = () => {
    if (target === 'modal') {
      const selectIdol = document.getElementById(idol.name);
      selectIdol.click();
    }
    setSelect(true);
    setSelectIdolId(idol.id);
  };

  const isSelected = selectIdolId === idol.id;

  const selectClass = classNames({
    [styles.selectIdol]: isSelected,
  });

  return (
    <li className={itemClass} onClick={handleClick}>
      <div className={styles.modalContent}>
        <div className={contentClass}>
          <div className={styles.point}>
            <img
              className={styles.picture}
              src={idol.profilePicture}
              alt={idol.name}
            />
            <div className={selectClass}></div>
          </div>
          <div className={styles.ranking}>{index + 1}</div>
          <div className={infoClass}>
            <div className={styles.target}>
              {idol.group} {idol.name}
            </div>
            <div className={styles.votes}>{idol.totalVotes}표</div>
          </div>
        </div>

        {target === 'modal' && (
          <input id={idol.name} type="radio" name={target} value={idol.id} />
        )}
      </div>

      <hr className={styles.divide} />
    </li>
  );
}
