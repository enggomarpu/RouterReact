import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Components/Home";
import Pushy from 'pushy-sdk-web';


import {
    BrowserRouter as Router,
    Routes,
    Route, Link, Outlet, useParams
} from 'react-router-dom';
// import {AddToCart} from './GlobalProvider';
import Products from './Components/Products';
import ProductsList from './Components/ProductsList';
import ProductDetail from './Components/ProductDetail';

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
    linkStyle: {
        padding: theme.spacing(1),
        color: 'white',
        textDecoration: 'none'
    },
}));


export default function App() {


    const deviceToken = '379d424b0cf1fe9c81a3e4';
    Pushy.register({ appId: '607d3e9ebe50e00f1b8f55ab' }).then(function (deviceToken) {
        // Print device token to console
        console.log('Pushy device token: ' + deviceToken);

        // Send the token to your backend server via an HTTP GET request
        //fetch('https://your.api.hostname/register/device?token=' + deviceToken);

        // Succeeded, optionally do something to alert the user
    }).catch(function (err) {
        // Handle registration errors
        console.error(err);
    });

    // Handle push notifications (only when web page is open)
    Pushy.setNotificationListener(function (data) {
        // Print notification payload data
        console.log('Received notification: ' + JSON.stringify(data));

        // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
        let message = data.message || 'Test notification';

        // Display an alert with message sent from server
        alert('Received notification: ' + message);
    });


    const classes = useStyles();
    return (
        <>
            {/* <nav>
                <Link to="/" style={{padding: '10px'}}>Home</Link>
                {<Link to="/dashboard" style={{padding: '10px'}}>Dashoboard</Link>
                <Link to="/dashboard/MEN" style={{padding: '10px'}}>Men</Link>
                <Link to="/dashboard/WOMEN" style={{padding: '10px'}}>Women</Link>
                <Link to="/dashboard/ALL" style={{padding: '10px'}}>All</Link>}
                <Link to="/kids" className={classes.linkStyle}>Kids</Link>
                <Link to="/all" style={{padding: '10px'}}>All</Link>
                <Link to="/men" style={{padding: '10px'}}>Men</Link>
                <Link to="/women" style={{padding: '10px'}}>Women</Link>
            </nav> */}

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<ProductsList />} />
                <Route path={`/:id/:prodid`} element={<ProductDetail />} />



                {/* these are nested routes, these retain the contents of home page while you 
                    are navigating to other pages */}
                {/* <Route path="/" element={<Home />}>
                  <Route path=":id" element={<Products />} />
                  <Route path={`/:id/:prodid`} element={<ProductDetail />} />
                </Route> */}

                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/" element={<DashboardIndex />} />
                    {/* <Route path=":id" element={<DashboardShoe />} /> */}
                </Route>
            </Routes>
        </>

    );
}
export function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}
export function DashboardIndex() {
    const productCategory = ["MEN", "WOMEN", "KIDS", "ALL"]
    return (
        <div>
            <ul>
                {
                    productCategory.map((prod, id) => {
                        return (
                            <Link to={`/dashboard/${prod}`}><li>
                                <h4>{prod}</h4>

                            </li></Link>)
                    })
                }

            </ul>
            <DashboardShoe />
        </div>
    );
}
function DashboardShoe() {
    // const { id } = useParams();

    // return(
    //     <div>
    //       { id !== "all" ?  
    //        products.filter(prod => prod.gender.includes(id.toUpperCase())).map(filteredNam =>{ 
    //          return <div><Link to={`/${id}/${filteredNam.id}`}><li>{filteredNam.name}
    //                 </li></Link><button onClick={()=>AddCart(filteredNam)}>Add to Cart</button></div>
    //            }):  products.map(prod => <li>{prod.name}</li> )}
    //            <h3>{id}</h3>
    //     </div>
    // );
}
function DashboardDetail() {
    //   const { prodid } = useParams();
    //   return(
    //     <div>
    //       hello g {prodid}
    //       </div>
    // );
}
// function AddCart(cartObj){
//     return(
//         <div>
//             {AddToCart(cartObj)}
//             </div>
//     );
// }