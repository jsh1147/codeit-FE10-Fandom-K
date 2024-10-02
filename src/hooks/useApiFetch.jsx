import { useEffect, useState } from 'react';

export const useApiFetch = (fetchFunction, ...args) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [fetchFunction, JSON.stringify(args)]);

  return { data, isLoading, error };
};
