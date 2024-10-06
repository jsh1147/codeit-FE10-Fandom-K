import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scaleOut, bottomToTop } from '@/constants/motionConstants';
import { useCredit } from '@/hooks/useCredit';
import logo from '@/assets/images/logo.svg';
import Button from './components/Button';
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
      <motion.h2 {...bottomToTop} className={styles.title}>
        내가 좋아하는 아이돌을
        <br />
        가장 <span className={styles.keyword}>쉽게 덕질</span> 하는 방법
      </motion.h2>
      <motion.div {...scaleOut}>
        <Link className={styles.link} to="/list" aria-label="메인 페이지 이동">
          <img className={styles.logo} src={logo} alt="Fandom-K 로고" />
        </Link>
      </motion.div>
      <motion.div {...scaleOut}>
        <Button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          지금 시작하기
        </Button>
      </motion.div>
    </section>
  );
}
