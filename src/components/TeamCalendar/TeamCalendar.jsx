import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TeamCalendar({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">MatchDay&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
            <StyledTableCell align="right">homeTeam&nbsp;</StyledTableCell>
            <StyledTableCell align="right">awayTeam&nbsp;</StyledTableCell>
            <StyledTableCell align="right">score&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="right">{row.matchday}</StyledTableCell>
              <StyledTableCell align="right">{row.utcDate}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">
                {row.homeTeam.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.awayTeam.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {`${row.score.fullTime.homeTeam}:${row.score.fullTime.awayTeam}`}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
