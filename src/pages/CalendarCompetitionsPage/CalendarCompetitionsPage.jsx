import React from 'react';

import { useFetchData } from '../../data/useFetch.Data';

import Loader from '../../components/Loader/Loader';
import TeamCalendar from '../../components/TeamCalendar/TeamCalendar';

export default function CalendarCompetitionsPage(props) {
  let id = props.match.params.idChampionat;

  const { data, isLoading } = useFetchData(
    `http://api.football-data.org/v2/competitions/${id}/matches`,
  );

  return (
    <div>{isLoading ? <Loader /> : <TeamCalendar data={data.matches} />}</div>
  );
}
