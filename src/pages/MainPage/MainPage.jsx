import React, { useState, useMemo, useCallback } from 'react';

import { useLocation } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import CardItemList from '../../components/CardItemList/CardItemList';
import InputSearch from '../../components/inputSearch/InputSearch';

import { useFetchData } from '../../data/useFetch.Data';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function MainPage(props) {
  const { data, isLoading } = useFetchData(
    'http://api.football-data.org/v2/competitions/?plan=TIER_ONE',
  );

  const [inputValue, setInputValue] = useState(useQuery().get('filter') || '');

  const handleOnchangeValue = useCallback(
    (ev) => {
      const value = ev.target.value;

      props.history.push('?filter=' + value);
      setInputValue(value);
    },
    [props.history],
  );

  const filteredData = useMemo(() => {
    const { competitions = [] } = data;

    return competitions.filter((el) => {
      const regExp = new RegExp(inputValue, 'i');
      return regExp.test(el.name) || regExp.test(el.area.name);
    });
  }, [data, inputValue]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <InputSearch
            inputValue={inputValue}
            handleOnchangeValue={handleOnchangeValue}
          />
          <CardItemList data={filteredData} />
        </div>
      )}
    </div>
  );
}
