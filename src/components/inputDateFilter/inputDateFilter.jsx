import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function InputDateFilter({
  selectedDateFrom,
  handleDateChangeFrom,
  selectedDateTo,
  handleDateChangeTo,
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker from"
          format="MM/dd/yyyy"
          value={selectedDateFrom}
          onChange={handleDateChangeFrom}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker to"
          format="MM/dd/yyyy"
          value={selectedDateTo}
          onChange={handleDateChangeTo}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
