import { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const getHeaderHeight = () => {
  if (window.innerWidth >= 1200) return 80;
  if (window.innerWidth >= 768) return 70;
  return 60;
};

export default function Layout() {
  const [header, setHeader] = useState(getHeaderHeight());
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const updateHeader = () => {
      setHeader(getHeaderHeight());
    };
    const updateScroll = () => {
      setScroll(Math.round(window.scrollY));
    };

    window.addEventListener('resize', updateHeader);
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('resize', updateHeader);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  const maskStyle = useMemo(
    () => ({
      maskImage:
        `linear-gradient(#0000 ${header + scroll - 4}px,` +
        `#ffff ${header + scroll + 12}px)`,
    }),
    [header, scroll],
  );

  return (
    <>
      <Header />
      <div style={maskStyle}>
        <Outlet />
      </div>
    </>
  );
}
