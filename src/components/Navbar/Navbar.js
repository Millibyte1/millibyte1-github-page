import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    height: '8vh',
  },
  buttons: {},
  link: {
    color: 'white',
  },
}));

// prettier-ignore
const Navbar = () => {

  const classes = useStyles();

  const buttons = (
    <div className={classes.buttons} id="navbar-buttons-main-div">
      <Button><Typography><Link className={classes.link} to="/home" underline="none">Home</Link></Typography></Button>
      <Button><Typography><Link className={classes.link} to="/docs/1" underline="none">Docs</Link></Typography></Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>{buttons}</Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
