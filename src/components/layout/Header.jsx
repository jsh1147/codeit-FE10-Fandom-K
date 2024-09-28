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
      <Link to="/list" onClick={handleLinkClick}>
        <img src={logo} alt="메인 페이지 바로가기" />
      </Link>
      <Link to="/mypage" onClick={handleLinkClick}>
        <img src={profile} alt="마이 페이지 바로가기" />
      </Link>
    </header>
  );
}
