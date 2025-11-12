import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00BFA6' },   // teal-green (tech feel)
    secondary: { main: '#FF4081' }, // pink accent
    background: { default: '#0D1117', paper: '#161B22' },
    text: { primary: '#EAEAEA', secondary: '#A1A1A1' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h4: { fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
});

export default theme;
