import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6a1b9a', // A clean and vibrant purple color
    },
    secondary: {
      main: '#f48fb1', // A soft pink color
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White background for paper components
    },
    text: {
      primary: '#333333', // Dark gray for primary text
      secondary: '#666666', // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Slightly rounded corners for buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // White background for the AppBar
          color: '#333333', // Dark gray text color for the AppBar
          boxShadow: 'none', // Remove default shadow for a cleaner look
          borderBottom: '1px solid #e0e0e0', // Light border at the bottom
        },
      },
    },
  },
});

export default theme;