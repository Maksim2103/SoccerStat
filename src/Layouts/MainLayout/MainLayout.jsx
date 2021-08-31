import React from 'react';
import CardItemList from '../../components/CardItemList/CardItemList';

import Header from '../../components/Header/Header';

export default function MainLayout({ data }) {
  return (
    <div>
      <Header />
      <CardItemList data={data} />
    </div>
  );
}
