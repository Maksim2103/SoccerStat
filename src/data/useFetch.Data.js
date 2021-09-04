import { useState, useEffect } from 'react';
import { authToken } from './authToken';

export const useFetchData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl, {
          headers: authToken,
        });
        const results = await response.json();
        setData(results);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, [apiUrl]);

  return {
    data,
    isLoading,
  };
};
