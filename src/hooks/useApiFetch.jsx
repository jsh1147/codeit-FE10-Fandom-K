import { useEffect, useState, useCallback } from 'react';

export function useApiFetch(fetchFunction, ...args) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchFunction(...args);
        setData(result);
      } catch (err) {
        console.error(err);
        setError('데이터 로딩 실패');
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFunction],
  );

  useEffect(() => {
    wrappedFunction(...args);
  }, [wrappedFunction]);

  return { data, isLoading, error, makeRequest: wrappedFunction };
}
