import MyCredit from './MyCredit/MyCredit';
import DonationList from './Donation/Donations';
import Chart from './Chart/Chart';
import styles from './ListPage.module.css';

export default function ListPage() {
  return (
    <main className={styles.main}>
      <MyCredit />
      <DonationList />
      <Chart />
    </main>
  );
}
