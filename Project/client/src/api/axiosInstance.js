import axios from 'axios';

const createAxiosInstance = (serverURL) => {
    return axios.create({
        withCredentials: true,
        baseURL: serverURL,
    });
};

const $axios = createAxiosInstance('http://localhost:8082/api');

$axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});

export default $axios;