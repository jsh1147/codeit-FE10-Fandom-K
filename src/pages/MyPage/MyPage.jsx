import { useState, useEffect } from 'react';
import InterestIdol from './components/InterestIdol';
import AddIdol from './components/AddIdol';
import styles from './MyPage.module.css';

export default function MyPage() {
  const [interestIdols, setInterestIdols] = useState([]);

  useEffect(() => {
    const storedIdols = JSON.parse(localStorage.getItem('interestIdols')) || [];
    setInterestIdols(storedIdols);
  }, []);

  const addIdol = (selectedIdols) => {
    const updatedList = [
      ...interestIdols,
      ...selectedIdols.filter(
        (idol) =>
          !interestIdols.some((existingIdol) => existingIdol.id === idol.id),
      ),
    ];
    setInterestIdols(updatedList);
    localStorage.setItem('interestIdols', JSON.stringify(updatedList));
  };

  const removeIdol = (idolId) => {
    const updatedList = interestIdols.filter((idol) => idol.id !== idolId);
    setInterestIdols(updatedList);
    localStorage.setItem('interestIdols', JSON.stringify(updatedList));
  };

  return (
    <div className={styles.myPage}>
      <h1 className="blind">Fandom-K 마이 페이지</h1>
      <InterestIdol idols={interestIdols} removeIdol={removeIdol} />
      <div className={styles.divider}></div>
      <AddIdol addIdol={addIdol} />
    </div>
  );
}
