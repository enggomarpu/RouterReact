import React from 'react';

export const fetchingProducts = async () => {

    const url = 'https://disease.sh/v2/all';
    try {
        const { data } = await fetch(`${url}`);
        return data;
    }
    catch(error){
        return error;
    }
    //console.log(fetchReponse)
};