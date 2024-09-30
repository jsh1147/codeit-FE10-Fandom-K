import Title from './title/Title';
import Description from './description/Description';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <Title />
      <Description />
    </main>
  );
}
