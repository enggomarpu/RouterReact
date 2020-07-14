import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { Grid, Container } from '@material-ui/core';
import GlobalContext from '../GlobalContext';
import {Link, useParams} from 'react-router-dom';
import ProductsList from './ProductsList';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    linkStyle: {
        padding: theme.spacing(1),
        color: 'black',
        textDecoration: 'none'
    },

    
}));

export default function Products({prod}) {
    const classes = useStyles();
    const { id } = useParams();
    
    
    const { addToCart } = useContext(GlobalContext);
    
    // function AddCart(cartObj) {
    //     return (
    //         <div>
    //             {addToCart(cartObj)}
    //         </div>
    //     );
    // }


    return (
        <Card className={classes.root} spacing={0} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <Link to={`/${id}/${prod.id}`} className={classes.linkStyle}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={prod.name}
                        height={300}
                        image={prod.imageURL}
                        title={prod.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {prod.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h6">
                            {prod.price} - PKR
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {/* <Button variant="contained" size="large" color="primary" onClick={() => addToCart(prod)}>
                    Add to Cart
                </Button> */}
                <Button type="submit" style={{margin: '10px 0 0 0'}} fullWidth onClick={() => addToCart(prod)} 
                        variant="contained" color="primary">Add Cart</Button>  
            </CardActions>
        </Card>
        
    );
}
