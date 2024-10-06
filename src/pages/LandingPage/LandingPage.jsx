import Title from './Title/Title';
import Descriptions from './Descriptions/Descriptions';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <Title />
      <Descriptions />
    </main>
  );
}
