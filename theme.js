import { createTheme } from '@mui/material/styles';

const reportsDatePickerTheme = createTheme({
  components: {
    MuiDateTimePickerToolbar: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#4eb5f3',
        },
        dateContainer: {
          color: 'white',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        dayWithMargin: {
          color: 'red',
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          backgroundColor: '#4eb5f3',
        },
        indicator: {
          border: '1px solid #88134A',
        },
      },
    },
  },
});

export default reportsDatePickerTheme;
