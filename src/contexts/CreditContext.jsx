import { createContext, useEffect, useState } from 'react';

export const CreditContext = createContext(null);

const CREDIT_KEY = 'credit';

export function CreditProvider({ children }) {
  const [credit, setCredit] = useState(0);

  const getStoredCredit = () => {
    return Number(localStorage.getItem(CREDIT_KEY)) || 0;
  };

  const updateCreditStorage = (value) => {
    const currentCredit = getStoredCredit();
    localStorage.setItem(CREDIT_KEY, currentCredit + value);
  };

  const updateCredit = (value) => {
    const addedCredit = Number(value);

    if (!addedCredit) {
      throw new Error(
        `업데이트할 크레딧 값이 잘못되었습니다. 입력값: ${value}`,
      );
    }

    setCredit((prev) => prev + addedCredit);
    updateCreditStorage(addedCredit);
  };

  const resetCredit = () => {
    localStorage.removeItem(CREDIT_KEY);
    setCredit(0);
  };

  useEffect(() => {
    setCredit(getStoredCredit());
  }, []);

  return (
    <CreditContext.Provider value={{ credit, updateCredit, resetCredit }}>
      {children}
    </CreditContext.Provider>
  );
}
