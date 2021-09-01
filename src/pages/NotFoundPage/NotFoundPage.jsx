import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  title: {
    textAlign: 'center',
  },
});

export default function NotFoundPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h2"
        component="h2"
        color="primary"
      >
        404
      </Typography>
      <Typography
        className={classes.title}
        variant="h3"
        component="h2"
        color="primary"
      >
        Извините, запрашиваемая страница не найдена...
      </Typography>
    </div>
  );
}
