import React, { useState, useEffect } from 'react';
import CardItemList from '../../components/CardItemList/CardItemList';

// import { useFetchData } from '../../data/useFetch.Data';

import Header from '../../components/Header/Header';

// export const useFetchData = () => {
//   const [apiUrl, setApiUrl] = useState();
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getContacts = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(apiUrl, {
//           headers: { 'X-Auth-Token': '3fb225e644984a36a20c61e950d829a3' },
//         });
//         const results = await response.json();
//         setData(results);
//       } catch (e) {
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getContacts();
//   }, [apiUrl]);

//   return {
//     data,
//     isLoading,
//     apiUrl,
//   };
// };

export default function MainPage() {
  // const [baseUrl, setBaseUrl] = useState();
  // console.log(baseUrl);

  // const { data } = useFetchData();
  // console.log(data);

  const [apiUrl, setApiUrl] = useState();
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

  useEffect(() => {
    console.log(apiUrl);
  }, [apiUrl]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Header />
      <CardItemList setApiUrl={setApiUrl} />
    </div>
  );
}
