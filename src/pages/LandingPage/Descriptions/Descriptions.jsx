import { descriptionData } from '@/constants/landingConstants';
import Description from './components/Description';
import styles from './Descriptions.module.css';

export default function Descriptions() {
  return (
    <section className={styles.section}>
      <div className={styles.guide} aria-hidden="true"></div>
      {descriptionData.map((data, idx) => (
        <Description
          key={idx}
          idx={idx}
          keyword={data.keyword}
          content={data.content}
          imageAlt={data.imageAlt}
        />
      ))}
    </section>
  );
}
