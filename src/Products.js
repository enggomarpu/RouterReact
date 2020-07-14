import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Routes,
    Route, Link, Outlet, useParams
} from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import GlobalContext from './GlobalContext';
import products from './Products.json';
import ProductsList from './ProductsList';
import { forInStatement } from '../node_modules/@babel/types';
import { Grid, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
   
    containerStyle: {
        display: 'flex',
          justifyContent: 'space-between',
        //   textAlign: 'center',
        border: '1px solid red'
    }
}));




function Products(props) {
    const classes = useStyles();

    const { id } = useParams();
    const { addToCart } = useContext(GlobalContext);

    return (
        <div>
        <h1 style={{textAlign: 'center'}}> Products {id.toUpperCase()} </h1>
            <Container>
                <Grid container spacing={4}>
                    {id !== "all" ?
                        products.filter(prod => prod.gender.includes(id.toUpperCase())).map(filteredNam => {
                            return (<Grid item xs={12} md={4}>
                                        <ProductsList prod={filteredNam} />
                                    </Grid>)
                        }) : products.map(prod => {
                               return (<Grid item xs={12} md={4}>
                                            <ProductsList prod={prod} />    
                                        </Grid>)
                            })}
                    
                </Grid>
            </Container>
        </div>
    );
}
{/* <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={name}
          onClick={handleClick}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h6" align='center'>
            {name}
          </Typography>
          <Typography variant="h6" component="h6" align='center'>
            {price}/- PKR
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">
        <AddShoppingCart/>
          Add TO Cart
        </Button>
      </CardActions>
    </Card> */}

export default Products;