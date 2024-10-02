import Title from './title/Title';
import Descriptions from './descriptions/Descriptions';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <Title />
      <Descriptions />
    </main>
  );
}
