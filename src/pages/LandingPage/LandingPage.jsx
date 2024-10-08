import Title from './Title/Title';
import Descriptions from './Descriptions/Descriptions';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <h1 className="blind">Fandom-K 랜딩 페이지</h1>
      <Title />
      <Descriptions />
    </main>
  );
}
