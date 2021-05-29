import React from 'react';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import { Routes } from './components/Routes';
import './App.css';

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
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"f
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
