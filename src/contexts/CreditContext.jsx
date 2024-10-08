import { createContext, useState } from 'react';

export const CreditContext = createContext(null);

const CREDIT_KEY = 'credit';

export function CreditProvider({ children }) {
  const [credit, setCredit] = useState(
    Number(localStorage.getItem(CREDIT_KEY)) || 0,
  );

  const updateCredit = (value, operation) => {
    if (isNaN(Number(value))) {
      throw new Error(`크레딧 값이 잘못되었습니다. 입력값: ${value}`);
    }

    setCredit((prev) => {
      const credit = operation === 'add' ? prev + value : prev - value;

      if (credit < 0) {
        throw new Error(
          `크레딧 값이 음수가 될 수 없습니다. 크레딧 값: ${credit}`,
        );
      }

      localStorage.setItem(CREDIT_KEY, credit);

      return credit;
    });
  };

  const addCredit = (value) => updateCredit(value, 'add');
  const deductCredit = (value) => updateCredit(value, 'deduct');

  const resetCredit = () => {
    localStorage.removeItem(CREDIT_KEY);
    setCredit(0);
  };

  return (
    <CreditContext.Provider
      value={{
        credit,
        addCredit,
        deductCredit,
        resetCredit,
      }}
    >
      {children}
    </CreditContext.Provider>
  );
}
