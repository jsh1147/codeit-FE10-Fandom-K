import MyCredit from './MyCredit/MyCredit';
import Donations from './Donation/Donations';
import Chart from './Chart/Chart';
import styles from './ListPage.module.css';

export default function ListPage() {
  return (
    <main className={styles.main}>
      <h1 className="blind">Fandom-K 목록 페이지</h1>
      <MyCredit />
      <Donations />
      <Chart />
    </main>
  );
}
