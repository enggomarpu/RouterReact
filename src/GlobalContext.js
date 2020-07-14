import {createContext} from 'react';

export const initialState = {
    cart: [],
    name: 'Umar',
};

const GlobalContext = createContext(initialState);

export default GlobalContext;