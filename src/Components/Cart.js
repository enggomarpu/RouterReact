import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';

function Cart(props) {
    const { name, cart } = useContext (GlobalContext);
    console.log('name', name);
    const totalPrice = cart.reduce((acc,curr) => acc + curr.price, 0 );
    return (
        <div>
            <p>total items in cart {cart.length}</p>
            <p>total price in cart {totalPrice}</p>
        </div>
    );
}

export default Cart;


//  <Card className={classes.root}>
//                   <CardContent>
//                     <Typography className={classes.title} color="textSecondary" gutterBottom>
//                       Word of the Day
//                     </Typography>
//                     <Typography variant="h5" component="h2">
                    
//                     </Typography>
//                     <Typography className={classes.pos} color="textSecondary">
//                       adjective
//                     </Typography>
//                     <Typography variant="body2" component="p">
//                       well meaning and kindly.
//                       <br />
//                       {'"a benevolent smile"'}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Learn More</Button>
//                   </CardActions>
//                 </Card>