import React, { useMemo, useState, useCallback } from 'react';

import { useLocation } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import TeamList from '../../components/TeamsList/TeamsList';
import InputSearch from '../../components/inputSearch/InputSearch';

import { useFetchData } from '../../data/useFetch.Data';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function TeamsPage(props) {
  const id = props.match.params.idChampionat;

  const { data, isLoading } = useFetchData(
    `http://api.football-data.org/v2/competitions/${id}/teams`,
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
    const { teams = [] } = data;

    const regExp = new RegExp(inputValue, 'i');
    return teams.filter((el) => {
      return regExp.test(el.name);
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
          <TeamList data={filteredData} />
        </div>
      )}
    </div>
  );
}
