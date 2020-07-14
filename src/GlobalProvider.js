import React, {useEffect, useReducer} from 'react';
import GlobalContext, { initialState } from "./GlobalContext";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GLOBAL':
            return {
                ...state,
                
            }
        case 'ERROR':
            return {
                error: '<h1>Something went wrong</h1>'
            }
        case 'CART':
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                name: 'Usman',
            }    
        default:
            break;
    }
    //console.log('Reducer called', state);
}


const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // useEffect(() => {
    //     fetchGlobalProducts();
    // },[]);

    // const fetchGlobalProducts = () => {

    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         // We get the API response and receive data in JSON format...
    //         .then(response => response.json())
    //         // ...then we update the users state
    //         .then(data =>
    //             dispatch({action: 'GLOBAL', payload: data})
    //         )
    //         // Catch any errors we hit and update the app
    //         .catch(error => dispatch({action: 'ERROR', payload: error}));

    // }
    const addToCart = (cartobj) => {
       // console.log('cart in global', cartobj);
       console.log('cart in global', state.name);
       console.log('cart in global', cartobj);
       dispatch({type: 'CART', payload: cartobj})       
    }
    return(
         <GlobalContext.Provider value={{
          name: state.name,
          cart: state.cart,
          addToCart,
      }}>
          {children}
      </GlobalContext.Provider>
    );
}
export default GlobalProvider;