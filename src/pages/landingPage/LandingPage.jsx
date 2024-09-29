import styles from './LandingPage.module.css';
import TitleSection from './TitleSection';
import DescriptionSection from './DescriptionSection';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <TitleSection />
      <DescriptionSection />
    </main>
  );
}
