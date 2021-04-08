import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {

    const baseUrl = 'https://60656470f0919700177875bd.mockapi.io/api/v1/';

    const [data, setData] = useState(0);

    useEffect(() => {
        if(!Array.isArray(data) && data == 0) {
            axios.get(baseUrl+'promobanners').then(response => setData(response.data));
        }        
    });

    return true;
}

export default Services;