import styles from './InterestIdol.module.css';
import Slider from 'react-slick';
import { interestIdolsSettings as settings } from '@/constants/carouselConstants';
import DeselectIcon from '@/assets/icons/deselect-idol.svg';

export default function InterestIdol({ idols, removeIdol }) {
  return (
    <div className={styles.container}>
      <h2>내가 관심 있는 아이돌</h2>

      {idols.length === 0 ? (
        <div className={styles.emptyState}>
          <p>현재 관심 있는 아이돌이 없습니다.</p>
        </div>
      ) : (
        <div className={styles.idolCardContainer}>
          <Slider {...settings}>
            {idols.map((idol) => (
              <div key={idol.id} className={styles.idolCard}>
                <div className={styles.cardContent}>
                  <img
                    src={idol.profilePicture}
                    alt={idol.name}
                    className={styles.image}
                  />
                  <button
                    className={styles.deleteIcon}
                    onClick={() => removeIdol(idol.id)}
                  >
                    <img src={DeselectIcon} alt="삭제" />
                  </button>
                </div>
                <p className={styles.name}>{idol.name}</p>
                <p className={styles.group}>{idol.group}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
