import { useContext } from 'react';
import { CreditContext } from '../contexts/CreditContext';

export const useCredit = () => useContext(CreditContext);
