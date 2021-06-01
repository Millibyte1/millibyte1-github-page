import React from 'react';

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import './App.css';
import { Routes } from 'components/Routes';

const useTheme = () =>
  createMuiTheme({
    palette: {
      primary: { main: '#292929' },
      secondary: { main: '#212121' },
    },
  });

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
  },
  fullPage: {
    height: '100vh',
    width: '100vw',
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.app}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
