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
          color: 'red',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: 'black', // month picker color
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        dayWithMargin: {
          color: 'black', // calendar date number colors.
        },
        disabled: {
          color: 'red',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
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
          backgroundColor: '#88134A',
        },
      },
    }, // tab indicators and background color
  },
});

export default reportsDatePickerTheme;
