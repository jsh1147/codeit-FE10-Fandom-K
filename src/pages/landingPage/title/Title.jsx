import { useNavigate, Link } from 'react-router-dom';
import { useCredit } from '@/hooks/useCredit';
import Button from './components/Button';
import logo from '@/assets/images/logo.svg';
import styles from './Title.module.css';

export default function Title() {
  const { resetCredit } = useCredit();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    resetCredit();
    navigate('/list');
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        내가 좋아하는 아이돌을
        <br />
        가장 <span className={styles.keyword}>쉽게 덕질</span> 하는 방법
      </h2>
      <Link className={styles.link} to="/list" aria-label="메인 페이지 이동">
        <img className={styles.logo} src={logo} alt="Fandom-K 로고" />
      </Link>
      <Button
        className={styles.button}
        type="button"
        onClick={handleButtonClick}
        content="지금 시작하기"
      />
    </section>
  );
}
