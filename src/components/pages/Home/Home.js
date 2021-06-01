import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fullPage: {
    marginTop: '8vh',
    height: '92vh',
    width: '100vw',
    backgroundColor: '#212121',
    display: 'flex',
  },
}));

const Home = () => {
  const classes = useStyles();

  return <div className={classes.fullPage} id="home-main-div" />;
};

export default Home;
