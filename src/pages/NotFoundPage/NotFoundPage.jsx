import styles from './NotFoundPage.module.css';
import logo from '../../assets/images/logo.svg';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Fandom-K 로고" className={styles.logo} />
      </div>
      <h2 className={styles.subtitle}>404</h2>
      <h1 className={styles.title}>요청하신 페이지를 찾을 수 없습니다</h1>
      <div className={styles.buttonWrapper}>
        <Link to="/" aria-label="메인 페이지 이동">
          <Button className={styles.button}>홈페이지 바로가기</Button>
        </Link>
      </div>
    </div>
  );
}
