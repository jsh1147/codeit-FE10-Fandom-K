import { useCallback, useEffect, useState } from 'react';
import Title from './components/Title';
import Tab from './components/Tab';
import IdolCard from './components/IdolCard';
import LoadMore from './components/LoadMore';
import { getCharts } from '@/apis/chartsApi.js';
import styles from './Chart.module.css';

export default function Chart() {
  const [activeTab, setActiveTab] = useState('female');
  const [chartIdols, setChartIdols] = useState([]);
  const [chartCursor, setChartCursor] = useState(null);
  const [chartHasMore, setChartHasMore] = useState(true);
  const [chartLoading, setChartLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdols, setModalIdols] = useState([]);
  const [modalCursor, setModalCursor] = useState(null);
  const [modalHasMore, setModalHasMore] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [updateResult, setUpdateResult] = useState(false);

  const tabData = [
    { label: '이달의 여자 아이돌', status: 'female' },
    { label: '이달의 남자 아이돌', status: 'male' },
  ];

  const fetchIdols = useCallback(
    async ({ gender, cursor, pageSize = 10, target }) => {
      if (
        (target === 'modal' && (modalLoading || !modalHasMore)) ||
        (target === 'chart' && (chartLoading || !chartHasMore))
      ) {
        return;
      }

      target === 'chart' ? setChartLoading(true) : setModalLoading(true);

      try {
        const data = await getCharts(gender, cursor, pageSize);
        const idols = data?.idols || [];
        const nextCursor = data.nextCursor;

        if (idols.length < pageSize || !nextCursor) {
          target === 'chart' ? setChartHasMore(false) : setModalHasMore(false);
        }

        if (target === 'chart') {
          setChartIdols((prevList) => [...prevList, ...idols]);
          setChartCursor(nextCursor);
        } else if (target === 'modal') {
          setModalIdols((prevList) => [...prevList, ...idols]);
          setModalCursor(nextCursor);
        }
      } catch (error) {
        console.error('Error fetching idols:', error);
      } finally {
        target === 'chart' ? setChartLoading(false) : setModalLoading(false);
      }
    },
    [modalLoading, modalHasMore, chartLoading, chartHasMore],
  );

  useEffect(() => {
    if (modalIsOpen) {
      fetchIdols({
        gender: activeTab,
        cursor: null,
        pageSize: 10,
        target: 'modal',
      });
    } else if (updateResult && !modalIsOpen) {
      isClose();
      fetchIdols({
        gender: activeTab,
        cursor: null,
        pageSize: 10,
        target: 'chart',
      });
    } else if (!modalIsOpen && !updateResult) {
      isClose();
      fetchIdols({
        gender: activeTab,
        cursor: null,
        pageSize: 10,
        target: 'chart',
      });
    }
  }, [activeTab, modalIsOpen, updateResult]);

  const handleLoadMore = (target) => {
    fetchIdols({
      gender: activeTab,
      cursor: target === 'chart' ? chartCursor : modalCursor,
      target,
    });
  };

  const handleChangeList = (tab) => {
    setActiveTab(tab);
    setChartIdols([]);
    setModalIdols([]);
    setChartHasMore(true);
    setModalHasMore(true);
  };

  const isClose = () => {
    setModalIdols([]);
    setModalHasMore(true);
    setModalCursor(null);
    setModalIsOpen(false);
    setChartIdols([]);
    setChartCursor(null);
    setChartHasMore(true);
    setUpdateResult(false);
  };

  const modalProps = {
    activeTab,
    tabData,
    chartIdols,
    modalIsOpen,
    setModalIsOpen,
    modalIdols,
    modalCursor,
    modalHasMore,
    modalLoading,
    setUpdateResult,
    fetchIdols,
  };

  return (
    <section className={styles.chart}>
      <div className={styles.content}>
        <Title onClick={isClose} {...modalProps} />
        <div className={styles.tabs}>
          {tabData.map((tab) => (
            <Tab
              key={tab.status}
              label={tab.label}
              status={tab.status}
              activeTab={activeTab}
              onClick={() => handleChangeList(tab.status)}
            />
          ))}
        </div>
        <ol className={styles.list}>
          {chartIdols.map((idol, index) => (
            <IdolCard
              idol={idol}
              index={index}
              key={idol.id}
              target={'chart'}
            />
          ))}
        </ol>
      </div>
      {chartHasMore && !chartLoading && (
        <LoadMore onClick={() => handleLoadMore('chart')} />
      )}
    </section>
  );
}
