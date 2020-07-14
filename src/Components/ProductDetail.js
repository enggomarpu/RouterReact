import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Typography, Button} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useParams} from 'react-router-dom';
import products from '../Products.json';
import GlobalContext from '../GlobalContext';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    // width: 128,
    // height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  buttonStyle:{

  }
}));

export default function ComplexGrid() {
  const {prodid} = useParams();
  const classes = useStyles();
  const { addToCart } = useContext(GlobalContext);

  return (
    
     <div className={classes.root}>
     <Header />
      <h1 style={{textAlign: 'center'}}> Product Details </h1>
        {products.filter(product => product.id == prodid).map(pro => {
        return (
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={pro.imageURL} />
              </ButtonBase>
            </Grid>
            <Grid item md={6}>
                <Typography variant="h4" gutterBottom>
                    {pro.name}
                </Typography>
                  <Typography variant="h5" gutterBottom>
                    Price: {pro.price} PKR
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                      The Nike Sportswear Club Fleece Hoodie combines soft fabric with simple street style that's versatile enough for everyday use.
                      With a full zipper that goes to the chin, it's the perfect extra layer on a chilly day.
                  </Typography>
                  <Typography variant="h6" gutterBottom spacing={4}>
                    Category: {pro.category}
                  </Typography>
                  <Typography variant="h6" gutterBottom spacing={4}>
                    Items Left: {pro.items_left}
                  </Typography>
                  <Button type="submit" style={{margin: '10px 0 0 0'}} fullWidth variant="contained" 
                        color="primary" onClick={() => addToCart(pro)}>Add Cart</Button>    
            </Grid>
          </Grid>
        </Paper>
      );
    })}
      </div>
  );
}
