import { createContext, useEffect, useState, useCallback } from 'react';

export const CreditContext = createContext(null);

const CREDIT_KEY = 'credit';

export function CreditProvider({ children }) {
  const [credit, setCredit] = useState(0);

  const getStoredCredit = useCallback(() => {
    return Number(localStorage.getItem(CREDIT_KEY));
  }, []);

  const updateCreditStorage = useCallback(
    (value) => {
      const currentCredit = getStoredCredit();
      localStorage.setItem(CREDIT_KEY, currentCredit + value);
    },
    [getStoredCredit],
  );

  const updateCredit = useCallback(
    (value) => {
      const addedCredit = Number(value);

      if (!addedCredit) {
        throw new Error(
          `업데이트할 크레딧 값이 잘못되었습니다. 입력값: ${value}`,
        );
      }

      setCredit((prev) => prev + addedCredit);
      updateCreditStorage(addedCredit);
    },
    [updateCreditStorage],
  );

  useEffect(() => {
    setCredit(getStoredCredit());
  }, [getStoredCredit]);

  return (
    <CreditContext.Provider value={{ credit, updateCredit }}>
      {children}
    </CreditContext.Provider>
  );
}
