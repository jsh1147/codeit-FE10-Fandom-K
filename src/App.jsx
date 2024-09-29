import { CreditProvider } from './contexts/CreditContext';
import Router from './Router';

export default function App() {
  return (
    <CreditProvider>
      <Router />
    </CreditProvider>
  );
}
