import React from 'react';
import Loader from '../../components/Loader/Loader';
import CardItemList from '../../components/CardItemList/CardItemList';

import { useFetchData } from '../../data/useFetch.Data';

export default function MainPage() {
  const { data, isLoading } = useFetchData(
    'http://api.football-data.org/v2/competitions/?plan=TIER_ONE',
  );

  return (
    <div>
      {isLoading ? <Loader /> : <CardItemList data={data.competitions} />}
    </div>
  );
}
