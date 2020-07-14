import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import products from './Products.json';
import {
    BrowserRouter as Router,
    Routes,
    Route, Link, Outlet, useParams
} from 'react-router-dom';

export  default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashoboard</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/" element={<DashboardIndex />}></Route>
                    <Route path=":id" element={<DashboardShoe />}></Route>
                </Route>
            </Routes>
        </Router>

    );
}
function Dashboard() {
    return(
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}
function DashboardIndex() {
    //const productCategory = ["MEN", "WOMEN", "KIDS"]
    return(
        <div>
            <ul>
                {
                    products.map((prod, id)=>{
                        return (
                            <Link to={`/dashboard/${id}`}><li>
                                <h4>{prod.name}</h4>
                                <img src={prod.imageURL} alt={prod.name} />
                            </li></Link>)
                    })
                }

            </ul>
        </div>
    );
}
function DashboardShoe() {
    const { id } = useParams();
    return(
        <div>
            <h1>Dashboard Shoe {id}</h1>
        </div>
    );
}
