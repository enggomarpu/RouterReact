import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import StateContext from "../GlobalContext";
import Header from './Header';
import ProductList from './ProductsList';
import { Paper, Grid, Card, Typography } from "@material-ui/core";
import {Link, Outlet} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardStyle:{
    padding: theme.spacing(4),
  },
  linkStyle:{
    padding: theme.spacing(1),
    color: 'white',
    textDecoration: 'none'
  }
}));


function Home() {
  const classes = useStyles();

    const { name } = useContext(StateContext);
    return(
      <div>
          <Header />
          {/* <Cart /> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Link to="/men" className={classes.linkStyle}>
                <Card className={classes.cardStyle}>
                  <Typography variant="h2" style={{textAlign: 'center'}}>Men</Typography>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link to="/women" className={classes.linkStyle}>
                <Card className={classes.cardStyle}>
                  <Typography variant="h2" style={{textAlign: 'center'}}>Women</Typography>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link to="/kids" className={classes.linkStyle}>
                <Card className={classes.cardStyle}>
                  <Typography variant="h2" style={{textAlign: 'center'}}>Kids</Typography>
                </Card>
              </Link>
            </Grid>
        </Grid>
          <Outlet />
        </div>  
    );
}
export default Home;