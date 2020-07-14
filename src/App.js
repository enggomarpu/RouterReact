import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home";
import {
    BrowserRouter as Router,
    Routes,
    Route, Link, Outlet, useParams
} from 'react-router-dom';
// import {AddToCart} from './GlobalProvider';
import Products from './Products';
import ProductDetail from './ProductDetail';

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
    linkStyle:{
    padding: theme.spacing(1),
    color: 'white',
    textDecoration: 'none'
    },
  }));
  

export  default function App() {
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
                <Route path="/" element={<Home />}>
                  <Route path=":id" element={<Products />} />
                  <Route path={`/:id/:prodid`} element={<ProductDetail />} />
                    
                </Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/" element={<DashboardIndex />} />
                    {/* <Route path=":id" element={<DashboardShoe />} /> */}
                </Route>
            </Routes>
        </>

    );
}
export function Dashboard() {
    return(
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}
export function DashboardIndex() {
    const productCategory = ["MEN", "WOMEN", "KIDS", "ALL"]
    return(
        <div>
            <ul>
                {
                    productCategory.map((prod, id)=>{
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
function DashboardDetail(){
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