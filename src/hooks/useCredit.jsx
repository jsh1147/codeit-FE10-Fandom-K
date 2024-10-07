import { useContext } from 'react';
import { CreditContext } from '../contexts/CreditContext';

export function useCredit() {
  const context = useContext(CreditContext);

  if (!context) {
    throw new Error('useCredit must be used within a CreditProvider');
  }

  return context;
}
