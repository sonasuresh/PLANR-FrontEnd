import axios from 'axios';
import config from '../config/config';

function callAPI(method, url, options) {
    const axiosConfig = {
        url,
        method,
        baseURL: config.apiURL,
        ...options
    }

    return axios(axiosConfig)
}

export default callAPI;