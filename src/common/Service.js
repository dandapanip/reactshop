import React from 'react';
import axios from 'axios';

class Service extends React.Component {

    baseUrl = 'https://60656470f0919700177875bd.mockapi.io/api/v1/';

    constructor(props) {
        super(props);
        this.setData = {
            data: [],
            errorMessage: []
        }        
    }

    setApiData() {
        return true;
    }

    getApiData(url) {
        axios.get(this.baseUrl+url)
        .then(response => this.setState({ data: response.data }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
        });
        return this.setState.data;
    }

    deleteApiData() {
        return true;
    }

    render() {
        return true;
    }

}

export default Service;