import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import theme from './theme';
import { MobileDatePicker, MobileDateTimePicker } from '@mui/x-date-pickers';

const popperSx = {
  // '& .MuiPaper-root': {
  //   backgroundColor: 'rgba(120, 120, 120, 0.2)',
  // },
  // '& .MuiCalendarPicker-root': {
  //   backgroundColor: 'rgba(45, 85, 255, 0.4)',
  // },
  '& .MuiPickersDay-dayWithMargin': {
    // color: 'black',
    // backgroundColor: 'rgba(50, 136, 153)',
  },
  // '& .MuiTabs-root': { backgroundColor: 'rgba(120, 120, 120, 0.4)' },
};

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              label="Date mobile"
              value={value}
              DialogProps={{ sx: popperSx }}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
