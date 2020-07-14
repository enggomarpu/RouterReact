import React, {useContext} from "react";
import GlobalProvider from './GlobalProvider';
import StateContext from "./GlobalContext";
import { Outlet } from "../node_modules/react-router";
import Cart from "./Cart";
import Header from './Header';
import ProductList from './ProductsList';

function Home() {
    const { name } = useContext(StateContext);
    return(
      <div>
          <Header />
          {/* <Cart /> */}
          <Outlet />
        </div>  
    );
}
export default Home;