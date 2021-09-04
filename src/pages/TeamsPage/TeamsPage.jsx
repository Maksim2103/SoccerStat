import React from 'react';
import Loader from '../../components/Loader/Loader';

import { useFetchData } from '../../data/useFetch.Data';
import TeamList from '../../components/TeamsList/TeamsList';

export default function TeamsPage(props) {
  let id = props.match.params.idChampionat;

  const { data, isLoading } = useFetchData(
    `http://api.football-data.org/v2/competitions/${id}/teams`,
  );

  console.log('TeamsData', data);

  return <div>{isLoading ? <Loader /> : <TeamList data={data.teams} />}</div>;
}
