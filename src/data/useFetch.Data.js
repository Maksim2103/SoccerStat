import { useState, useEffect } from 'react';

// const baseApiUrl = 'http://api.football-data.org/v2/competitions/2000';
// const baseApiUrl = 'http://api.football-data.org/v2/competitions/2021/teams';

export const useFetchData = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl, {
          headers: { 'X-Auth-Token': '3fb225e644984a36a20c61e950d829a3' },
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
    apiUrl,
  };
};
