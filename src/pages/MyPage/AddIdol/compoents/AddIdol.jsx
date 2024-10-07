import { useState, useEffect, useRef } from 'react';
import styles from './AddIdol.module.css';
import { getIdols } from '@/apis/idolsApi';
import SlideButton from './SlideButton';
import IdolCard from './IdolCard';
import Slider from 'react-slick';
import { addIdolsSettings } from '@/constants/carouselConstants';
import Button from '@/components/Button';
import plusIcon from '@/assets/icons/plus.svg';

export default function AddIdol({ addIdol }) {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [idolsHistory, setIdolsHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [pageSize, setPageSize] = useState(0);
  const nextCursorRef = useRef(null);
  const idolsRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth <= 767) {
        setPageSize(100);
        setIsMobileView(true);
      } else if (window.innerWidth <= 1199) {
        setPageSize(8);
        setIsMobileView(false);
      } else {
        setPageSize(16);
        setIsMobileView(false);
      }
    };

    updateView();
    window.addEventListener('resize', updateView);

    return () => {
      window.removeEventListener('resize', updateView);
    };
  }, []);

  useEffect(() => {
    async function fetchInitialIdols() {
      try {
        const idolsList = await getIdols(null, pageSize, '');
        if (idolsList && Array.isArray(idolsList.list)) {
          setIdols(idolsList.list);
          nextCursorRef.current = idolsList.nextCursor;
          setHasMore(!!idolsList.nextCursor);
          setIdolsHistory([
            { idols: idolsList.list, nextCursor: idolsList.nextCursor },
          ]);
          setCurrentPage(0);
        } else {
          setIdols([]);
          setHasMore(false);
        }
      } catch (error) {
        console.error('아이돌 목록 불러오기 실패:', error);
        setIdols([]);
        setHasMore(false);
      }
    }
    if (pageSize > 0) {
      fetchInitialIdols();
    }
  }, [pageSize]);

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
    if (idolsRef.current && !isMobileView) {
      const scrollWidth = idolsRef.current.clientWidth;
      idolsRef.current.scrollBy({ left: scrollWidth, behavior: 'smooth' });
    }

    if (hasMore && nextCursorRef.current !== null) {
      try {
        const idolsList = await getIdols(nextCursorRef.current, pageSize, '');
        if (idolsList && Array.isArray(idolsList.list)) {
          setIdols(idolsList.list);
          nextCursorRef.current = idolsList.nextCursor;
          setHasMore(!!idolsList.nextCursor);

          setIdolsHistory((prevHistory) => {
            const newPage = {
              idols: idolsList.list,
              nextCursor: idolsList.nextCursor,
            };
            return [...prevHistory.slice(0, currentPage + 1), newPage];
          });

          setCurrentPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error('다음 페이지 목록 불러오기 실패:', error);
      }
    }
  };

  const slideLeft = () => {
    if (idolsRef.current && !isMobileView) {
      const scrollWidth = idolsRef.current.clientWidth;
      idolsRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
    }

    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      setIdols(idolsHistory[prevPage].idols);
      setCurrentPage(prevPage);
      nextCursorRef.current = idolsHistory[prevPage].nextCursor;
      setHasMore(true);
    }
  };

  return (
    <div className={styles.container}>
      <p>관심 있는 아이돌을 추가해보세요.</p>
      {!isMobileView && (
        <SlideButton
          direction="left"
          onClick={slideLeft}
          disabled={currentPage === 0}
        />
      )}
      {isMobileView ? (
        <Slider {...addIdolsSettings} className={styles.addIdols}>
          {idols && idols.length > 0 ? (
            idols.map((idol) => (
              <div key={idol.id}>
                <IdolCard
                  idol={idol}
                  isSelected={selectedIdols.includes(idol)}
                  onSelect={handleSelect}
                />
              </div>
            ))
          ) : (
            <p>아이돌 목록이 없습니다.</p>
          )}
        </Slider>
      ) : (
        <div className={styles.addIdols} ref={idolsRef}>
          {idols && idols.length > 0 ? (
            idols.map((idol) => (
              <IdolCard
                key={idol.id}
                idol={idol}
                isSelected={selectedIdols.includes(idol)}
                onSelect={handleSelect}
              />
            ))
          ) : (
            <p>아이돌 목록이 없습니다.</p>
          )}
        </div>
      )}
      {!isMobileView && (
        <SlideButton
          direction="right"
          onClick={slideRight}
          disabled={!hasMore}
        />
      )}
      <div className={styles.addButtonWrapper}>
        <Button className={styles.addButton} onClick={handleAddInterestIdols}>
          <img src={plusIcon} alt="" />
          추가하기
        </Button>
      </div>
    </div>
  );
}
