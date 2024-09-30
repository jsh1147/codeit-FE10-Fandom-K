import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import profile from '../../assets/images/user-profile.svg';

export default function Header() {
  const { pathname: path } = useLocation();

  const handleLinkClick = (e) => {
    const targetPath = e.target.parentElement.pathname;
    if (path === targetPath) window.location.reload();
  };

  return (
    <header className={styles['header']}>
      <Link
        className={styles['header__logoLink']}
        to="/list"
        onClick={handleLinkClick}
        aria-label="메인 페이지 이동"
      >
        <img
          className={styles['header__logo']}
          src={logo}
          alt="Fandom-K 로고"
        />
      </Link>
      <Link
        className={styles['header__profileLink']}
        to="/mypage"
        onClick={handleLinkClick}
        aria-label="마이 페이지 이동"
      >
        <img
          className={styles['header__profile']}
          src={profile}
          alt="프로필 사진"
        />
      </Link>
    </header>
  );
}
