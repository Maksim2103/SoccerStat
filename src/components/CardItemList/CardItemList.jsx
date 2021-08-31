import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardItem from '../CardItem/CardItem';

const initialState = [
  {
    id: 2000,
    name: 'World Cup',
    country: 'World',
    img: '/assets/worldCup.png',
  },
  {
    id: 2001,
    name: 'Champions League',
    country: 'Europe',
    img: '/assets/ChampionsLeague.png',
  },
  {
    id: 2002,
    name: 'BundesLiga',
    country: 'Germany',
    img: '/assets/bundesliga.png',
  },
  {
    id: 2003,
    name: 'Eredivisie',
    country: 'Netherlands',
    img: '/assets/eredivisie.png',
  },
  { id: 2013, name: 'Seria A', country: 'Brazil', img: '/assets/brazil.png' },
  { id: 2014, name: 'La Liga', country: 'Spain', img: '/assets/laLiga.png' },
  {
    id: 2015,
    name: 'Liga 1',
    country: 'France',
    img: '/assets/franceLiga1.png',
  },
  {
    id: 2016,
    name: 'Championship',
    country: 'England',
    img: '/assets/englandChampionship.png',
  },
  {
    id: 2017,
    name: 'Premier League',
    country: 'Portugal',
    img: '/assets/portugalPremierLiga.png',
  },
  {
    id: 2018,
    name: 'Europe Championship',
    country: 'Europe',
    img: '/assets/euroChampionship.png',
  },
  { id: 2019, name: 'Seria A', country: 'Italy', img: '/assets/seriaA.png' },
  {
    id: 2021,
    name: 'Premier League',
    country: 'England',
    img: '/assets/englandPremierLiga.png',
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});

export default function CardItemList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {initialState.map((el) => {
        return (
          <CardItem
            key={el.id}
            name={el.name}
            title={el.country}
            id={el.id}
            imgSrc={el.img}
          />
        );
      })}
    </div>
  );
}
