import DonationList from './Donation/Donations';
import styles from './ListPage.module.css';

export default function ListPage() {
  return (
    <main className={styles.main}>
      <h1>Credit</h1>
      <DonationList />
      <h1>Chart</h1>
    </main>
  );
}
