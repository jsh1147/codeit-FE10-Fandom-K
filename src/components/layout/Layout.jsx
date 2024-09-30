import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ToastContainer } from 'react-toastify';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer autoClose={1500} closeButton={false} theme="dark" />
    </>
  );
}
