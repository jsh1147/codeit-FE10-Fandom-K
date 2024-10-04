import { useEffect, useState } from 'react';
import Title from './components/Title';
import Tab from './components/Tab';
import IdolCard from './components/IdolCard';
import { getCharts } from '@/apis/chartsApi.js';
import styles from './Chart.module.css';

export default function Chart() {
  const [activeTab, setActiveTab] = useState('female');
  const [idolList, setIdolList] = useState([]);

  const handleChangeList = (tab) => {
    setActiveTab(tab);
  };

  const fetchIdolList = async ({ gender, cursor, pageSize }) => {
    const data = await getCharts(gender, cursor, pageSize);
    const idols = data.idols;
    setIdolList(idols);
  };

  useEffect(() => {
    fetchIdolList({
      gender: activeTab,
      cursor: null,
    });
  }, [activeTab]);

  return (
    <section className={styles.chart}>
      <Title />

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
        {idolList &&
          idolList.map((idol, index) => (
            <IdolCard idol={idol} index={index} key={idol.id} />
          ))}
      </ol>
    </section>
  );
}
