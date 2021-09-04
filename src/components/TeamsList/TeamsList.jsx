import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TeamCardItem from '../TeamCardItem/TeamCardItem';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});

export default function TeamList({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((el) => {
        return (
          <TeamCardItem
            key={el.id}
            name={el.name}
            imgSrc={el.crestUrl}
            id={el.id}
          />
        );
      })}
    </div>
  );
}
