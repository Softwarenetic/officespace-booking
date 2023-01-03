import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import './DatePicker.scss';

function DatePicker() {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  );
}
export default DatePicker;
