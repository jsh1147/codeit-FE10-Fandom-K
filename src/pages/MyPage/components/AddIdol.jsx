import { useState, useEffect, useRef } from 'react';
import styles from './AddIdol.module.css';
import { getIdols } from '@/apis/idolsApi';
import AddButton from './AddButton';
import SlideButton from './SlideButton';
import IdolCard from './IdolCard';

export default function AddIdol({ addIdol }) {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [idolsHistory, setIdolsHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const nextCursorRef = useRef(null);
  const idolsRef = useRef(null);

  useEffect(() => {
    async function fetchInitialIdols() {
      try {
        const idolsList = await getIdols(null, 16, '');
        if (idolsList && Array.isArray(idolsList.list)) {
          setIdols(idolsList.list);
          nextCursorRef.current = idolsList.nextCursor;
          setHasMore(!!idolsList.nextCursor);
          setIdolsHistory([idolsList.list]);
          setCurrentPage(0);
        } else {
          console.error('API가 배열이 아닌 데이터를 반환했습니다:', idolsList);
          setIdols([]);
          setHasMore(false);
        }
      } catch (error) {
        console.error('아이돌 목록 불러오기 실패:', error);
        setIdols([]);
        setHasMore(false);
      }
    }

    fetchInitialIdols();
  }, []);

  const handleSelect = (idol) => {
    if (selectedIdols.includes(idol)) {
      setSelectedIdols(
        selectedIdols.filter((selected) => selected.id !== idol.id),
      );
    } else {
      setSelectedIdols([...selectedIdols, idol]);
    }
  };

  const handleAddInterestIdols = () => {
    addIdol(selectedIdols);
    setSelectedIdols([]);
  };

  const slideRight = async () => {
    if (hasMore) {
      try {
        const idolsList = await getIdols(nextCursorRef.current, 16, '');
        if (idolsList && Array.isArray(idolsList.list)) {
          setIdols(idolsList.list);
          nextCursorRef.current = idolsList.nextCursor;
          setHasMore(!!idolsList.nextCursor);

          setIdolsHistory((prevHistory) => [...prevHistory, idolsList.list]);
          setCurrentPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error('다음 페이지 목록 불러오기 실패:', error);
      }
    }
  };

  const slideLeft = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      setIdols(idolsHistory[prevPage]);
      setCurrentPage(prevPage);
      nextCursorRef.current = prevPage === 0 ? null : nextCursorRef.current;
    }
  };

  return (
    <div className={styles.container}>
      <p>관심 있는 아이돌을 추가해보세요.</p>

      <SlideButton
        direction="left"
        onClick={slideLeft}
        disabled={currentPage === 0}
      />

      <div className={styles.addIdols} ref={idolsRef}>
        {idols.map((idol) => (
          <IdolCard
            key={idol.id}
            idol={idol}
            isSelected={selectedIdols.includes(idol)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <SlideButton direction="right" onClick={slideRight} disabled={!hasMore} />

      <AddButton
        onClick={handleAddInterestIdols}
        className={styles.addButton}
      />
    </div>
  );
}
