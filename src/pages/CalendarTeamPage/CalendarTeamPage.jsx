import React, { useState, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { getTime } from 'date-fns';

import Loader from '../../components/Loader/Loader';
import TeamCalendar from '../../components/TeamCalendar/TeamCalendar';
import InputDateFilter from '../../components/inputDateFilter/inputDateFilter';

import { useFetchData } from '../../data/useFetch.Data';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CalendarTeamPage(props) {
  const id = props.match.params.idTeam;
  const query = useQuery();

  const { data, isLoading } = useFetchData(
    `http://api.football-data.org/v2/teams/${id}/matches`,
  );

  const [selectedDateFrom, setSelectedDateFrom] = useState(
    new Date(Number(query.get('dateFrom')) || '2021-05-30T00:00:00'),
  );
  const [selectedDateTo, setSelectedDateTo] = useState(
    new Date(Number(query.get('dateTo')) || '2021-12-31T00:00:00'),
  );

  const handleDateChangeFrom = (date) => {
    props.history.push(
      `?dateFrom=${getTime(date)}&dateTo=${query.get('dateTo')}`,
    );
    setSelectedDateFrom(date);
  };

  const handleDateChangeTo = (date) => {
    props.history.push(
      `?dateTo=${getTime(date)}&dateFrom=${query.get('dateTo')}`,
    );
    setSelectedDateTo(date);
  };

  const filteredData = useMemo(() => {
    const { matches = [] } = data;

    return matches.filter((el) => {
      const timeEl = Date.parse(el.utcDate);
      return timeEl > selectedDateFrom && timeEl < selectedDateTo;
    });
  }, [data, selectedDateFrom, selectedDateTo]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <InputDateFilter
            selectedDateFrom={selectedDateFrom}
            handleDateChangeFrom={handleDateChangeFrom}
            selectedDateTo={selectedDateTo}
            handleDateChangeTo={handleDateChangeTo}
          />
          <TeamCalendar data={filteredData} />
        </div>
      )}
    </div>
  );
}
