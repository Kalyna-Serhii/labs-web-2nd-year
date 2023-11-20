import axios from 'axios';

const createAxiosInstance = (serverURL) => {
    return axios.create({
        withCredentials: true,
        baseURL: serverURL,
    });
};

const $axios = createAxiosInstance('http://localhost:8082/api');

export default $axios;