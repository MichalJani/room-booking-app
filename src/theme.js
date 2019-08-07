import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: '#e91e63'
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#ffffff',
      secondary: '#00000'
    }
  }
});

export default theme;
