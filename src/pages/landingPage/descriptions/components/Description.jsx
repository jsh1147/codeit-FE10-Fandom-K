import background_1 from '@/assets/images/landing/background_1.png';
import background_2 from '@/assets/images/landing/background_2.png';
import background_3 from '@/assets/images/landing/background_3.png';
import description_1 from '@/assets/images/landing/description_1.png';
import description_2 from '@/assets/images/landing/description_2.png';
import description_3 from '@/assets/images/landing/description_3.png';
import styles from './Description.module.css';

const backgroundImage = [background_1, background_2, background_3];
const decriptionImage = [description_1, description_2, description_3];

export default function Description({ idx, keyword, content, imageAlt }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `radial-gradient(#000a, var(--black-200) 65%),
    url(${backgroundImage[idx]})`,
      }}
    >
      <div
        className={`${styles.textArea} ${idx === 1 ? styles.textAreaRight : ''}`}
      >
        <span className={styles.keyword}>{keyword}</span>
        <h2 className={styles.content}>{content}</h2>
      </div>
      <img className={styles.image} src={decriptionImage[idx]} alt={imageAlt} />
    </div>
  );
}
