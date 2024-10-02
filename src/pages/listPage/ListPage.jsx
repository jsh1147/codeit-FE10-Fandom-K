import DonationList from './Donation/Donations';
import Chart from './Chart/Chart';
import styles from './ListPage.module.css';

export default function ListPage() {
  return (
    <main className={styles.main}>
      <h1>Credit</h1>
      <DonationList />
      <Chart />
    </main>
  );
}
