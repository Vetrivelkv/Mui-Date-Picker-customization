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
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { makeStyles } from '@mui/styles';
import './demo.css';

const useStyles = makeStyles({
  root: {
    MuiDateTimePickerToolbar: {
      color: 'red',
    },
  }, // a style rule
  label: {}, // a nested style rule
});

function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const classes = useStyles();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const root = {
    '&MuiDateTimePickerToolbar-dateContainer &MuiTypography-root': {
      color: 'red',
    },
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            label="Date mobile"
            minDate={new Date()}
            value={value}
            DialogProps={{
              className: 'whiteThemeDatePicker',
              dialogContentClasses: root,
            }}
            toolbarTitle={<div>&nbsp;</div>}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MaterialUIPickers;
