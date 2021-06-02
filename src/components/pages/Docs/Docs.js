import React from 'react';
import { Link } from 'react-router-dom';

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fullPage: {
    marginTop: '8vh',
    height: '92vh',
    width: '100vw',
    backgroundColor: '#212121',
    display: 'flex',
  },
  buttons: {
    margin: 'auto',
    display: 'flex',
  },
  button: {
    marginLeft: '0.5vw',
    marginRight: '0.5vw',
  },
  link: {
    color: 'white',
  },
}));

const buttonsTheme = () =>
  createMuiTheme({
    palette: {
      primary: { main: '#0000FF' },
      secondary: { main: '#29af81' },
    },
  });

const Docs = () => {
  const classes = useStyles();
  return (
    <div className={classes.fullPage} id="docs-main-div">
      <MuiThemeProvider theme={buttonsTheme}>
        <div className={classes.buttons} id="docs-buttons">
          <a class="makeStyles-link-11" href="/docs/array64/dokka.zip?forcedownload=1" target="_blank" underline="none" download>
            <Button className={classes.button} color="secondary" variant="contained" >
              <Typography variant="body1">Download KDoc</Typography>
            </Button>
          </a>
          <a class="makeStyles-link-11" href="/docs/array64/dokkaJavadoc.zip?forcedownload=1" target="_blank" underline="none" download>
            <Button className={classes.button} color="secondary" variant="contained" >
              <Typography variant="body1">Download JavaDoc</Typography>
            </Button>
          </a>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default Docs;
