import { useEffect, useState } from 'react';
import Header from './header';
import Tab from './Tab';
import IdolCard from './IdolCard';
import getChart from './Api';
import styles from './Chart.module.css';

export default function Chart() {
  const [activeTab, setActiveTab] = useState('female');
  const [idolList, setIdolList] = useState([]);
  const pageSize = 10;

  const handleChangeList = (tab) => {
    setActiveTab(tab);
  };

  const fetchIdolList = async ({ gender, cursor, pageSize }) => {
    const idols = await getChart(gender, cursor, pageSize);
    const sortedIdols = idols.sort((a, b) => b.totalVotes - a.totalVotes);
    setIdolList(sortedIdols);
  };

  useEffect(() => {
    fetchIdolList({
      gender: activeTab,
      cursor: null,
      pageSize,
    });
  }, [activeTab, pageSize]);

  return (
    <section className={styles.chart}>
      <Header />

      <div className={styles.tabs}>
        <Tab
          label="이달의 여자 아이돌"
          status="female"
          activeTab={activeTab}
          onClick={() => handleChangeList('female')}
        />
        <Tab
          label="이달의 남자 아이돌"
          status="male"
          activeTab={activeTab}
          onClick={() => handleChangeList('male')}
        />
      </div>

      <ol className={styles.list}>
        {idolList.map((idol, index) => (
          <IdolCard idol={idol} index={index} key={idol.id} />
        ))}
      </ol>
    </section>
  );
}
