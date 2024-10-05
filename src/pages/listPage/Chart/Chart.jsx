import { useEffect, useState } from 'react';
import Title from './components/Title';
import Tab from './components/Tab';
import IdolCard from './components/IdolCard';
import LoadMore from './components/LoadMore';
import { getCharts } from '@/apis/chartsApi.js';
import styles from './Chart.module.css';

export default function Chart() {
  const [activeTab, setActiveTab] = useState('female');
  const [idolList, setIdolList] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const handleChangeList = (tab) => {
    setActiveTab(tab);
    setIdolList([]);
    setHasMore(true);
  };

  const fetchIdolList = async ({ gender, cursor, pageSize = 10 }) => {
    const data = await getCharts(gender, cursor, pageSize);
    const { idols, nextCursor } = data || {};

    if (idols.length < pageSize || !nextCursor) {
      setHasMore(false);
    }

    setIdolList((prevList) => [...prevList, ...idols]);
    setCursor(nextCursor);
  };

  useEffect(() => {
    fetchIdolList({
      gender: activeTab,
      cursor: null,
    });
  }, [activeTab]);

  const handleLoadMore = () => {
    fetchIdolList({
      gender: activeTab,
      cursor,
    });
  };

  return (
    <section className={styles.chart}>
      <div className={styles.content}>
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
          {idolList.map((idol, index) => (
            <IdolCard idol={idol} index={index} key={idol.id} />
          ))}
        </ol>
      </div>
      {hasMore && <LoadMore onClick={handleLoadMore} />}
    </section>
  );
}
