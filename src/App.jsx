import { CreditProvider } from './contexts/CreditContext';
import Router from './Router';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <CreditProvider>
      <Router />
      <ToastContainer autoClose={1500} closeButton={false} theme="dark" />
    </CreditProvider>
  );
}
